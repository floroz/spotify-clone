import { NextApiRequest, NextApiResponse } from "next";

export type ExtendedNextApiRequest = NextApiRequest & {
  user: any;
};

export type ExtendedNextApiResponse = NextApiResponse;
