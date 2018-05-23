import { Router, Request, Response } from 'express';
import UserRouter from './user.router';
import AuthRouter from './auth.router';

const APIRouter = Router();

/** write your router configuration here */

APIRouter.use("/user", UserRouter);
APIRouter.use("/auth", AuthRouter);

export default APIRouter;