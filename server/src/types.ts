import { Request, Response } from "express";
import { SessionData } from "express-session";
import { Session } from "inspector";

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { userId: number };
  };
  res: Response;
};
