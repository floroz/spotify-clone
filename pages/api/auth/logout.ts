import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>().post(async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(process.env.COOKIE_TOKEN, "", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 0,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })
  );

  return res.status(200).json({ success: "ok" });
});

export default handler;
