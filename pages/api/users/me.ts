import nextConnect from "next-connect";
import {
  ExtendedNextApiRequest,
  ExtendedNextApiResponse,
} from "../../../lib/api-models";
import { authMiddleware } from "../../../lib/auth-middleware";
import { User } from "../../../lib/models";

const handler = nextConnect<ExtendedNextApiRequest, ExtendedNextApiResponse>()
  .use(authMiddleware)
  .get<User>((req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    return res.json(req.user);
  });

export default handler;
