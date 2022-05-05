import Cookies from "cookies";
import jwt from "jsonwebtoken";
import { ExtendedNextApiRequest, ExtendedNextApiResponse } from "./api-models";

export const authMiddleware = (
  req: ExtendedNextApiRequest,
  res: ExtendedNextApiResponse,
  next: () => void
) => {
  const cookies = new Cookies(req, res);

  const token = cookies.get(process.env.COOKIE_TOKEN);

  if (!token) {
    return res.status(401).end();
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    if (user) {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(401).end();
  }

  return res.status(401).end();
};
