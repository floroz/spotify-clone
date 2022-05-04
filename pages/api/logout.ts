import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Cookies from "cookies";

const handler = nc<NextApiRequest, NextApiResponse>().post(async (req, res) => {
  const cookies = new Cookies(req, res, { keys: [process.env.COOKIE_TOKEN] });

  cookies.get(process.env.COOKIE_TOKEN, { signed: true });

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
