import nc from "next-connect";
import { ExtendedNextApiRequest, ExtendedNextApiResponse } from "@models";
import { authMiddleware } from "@middleware";

const handler = nc<ExtendedNextApiRequest, ExtendedNextApiResponse>()
  .use(authMiddleware)
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    return res.json(req.user);
  });

export default handler;
