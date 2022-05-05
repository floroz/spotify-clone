import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";
import { validator } from "../../../lib/validator";

const handler = nc<NextApiRequest, NextApiResponse>().post(async (req, res) => {
  const { email, password } = req.body;

  if (!validator.email(email, 4, 50) || !validator.password(password, 4, 60)) {
    return res.status(400).json({ message: "Invalid Request" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).end();
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ error: "Username or password do not match" });
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize(process.env.COOKIE_TOKEN, token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 8 * 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
      })
    );

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: "Bad Request" });
  }
});

export default handler;
