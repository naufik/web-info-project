import { Router, Request, Response } from 'express';
import UserRouter from './user.router';

const APIRouter = Router();

/** write your router configuration here */

APIRouter.use("/user", UserRouter);


export default APIRouter;