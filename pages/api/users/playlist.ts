import nextConnect from "next-connect";
import {
  ExtendedNextApiRequest,
  ExtendedNextApiResponse,
} from "../../../lib/api-models";
import { authMiddleware } from "../../../lib/auth-middleware";
import { prisma } from "../../../lib/prisma";

const handler = nextConnect<ExtendedNextApiRequest, ExtendedNextApiResponse>()
  .use(authMiddleware)
  .get(async (req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    try {
      const playlists = await prisma.playlist.findMany({
        where: { user: req.user.id },
      });

      return res.json(playlists);
    } catch (error) {
      return res.status(404).json({ message: "Not Found" });
    }
  })
  .post()
  .put();

export default handler;
