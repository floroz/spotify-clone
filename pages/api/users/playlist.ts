import nc from "next-connect";
import { ExtendedNextApiRequest, ExtendedNextApiResponse } from "@models";
import { authMiddleware } from "@middleware";
import { prisma } from "@db";

const handler = nc<ExtendedNextApiRequest, ExtendedNextApiResponse>()
  .use(authMiddleware)
  .get(async (req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    try {
      const playlists = await prisma.playlist.findMany({
        where: { userId: req.user.id },
        orderBy: {
          name: "asc",
        },
      });

      return res.json(playlists);
    } catch (error) {
      return res.status(404).json({ message: "Not Found" });
    }
  });

export default handler;
