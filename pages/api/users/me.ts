import nextConnect from "next-connect";
import {
  ExtendedNextApiRequest,
  ExtendedNextApiResponse,
} from "../../../lib/api-models";
import { authMiddleware } from "../../../lib/auth-middleware";

const handler = nextConnect<ExtendedNextApiRequest, ExtendedNextApiResponse>()
  .use(authMiddleware)
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    return res.json(req.user);
  });

export default handler;
