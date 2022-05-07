import jwt from "jsonwebtoken";
import { ExtendedNextApiRequest, ExtendedNextApiResponse } from "./api-models";
import { prisma } from "./prisma";

export const authMiddleware = async (
  req: ExtendedNextApiRequest,
  res: ExtendedNextApiResponse,
  next: () => void
) => {
  const token = req.cookies[process.env.COOKIE_TOKEN];

  if (!token) {
    return res.status(401).end();
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET) as any;
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(401).end();
    }

    // TODO: check if this operation can be done by prisma
    delete user.password;

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).end();
  }
};
