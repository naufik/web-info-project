import { Router, Request, Response } from 'express';
import UserRouter from './user.router';

const APIRouter = Router();

/** write your router configuration here */

APIRouter.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello " + req.query.fname + " " + req.query.lname);
});

APIRouter.get("/lists", (req: Request, res: Response) => {
    let lists = {}; //fetch from database.

    setInterval(() => {
        res.status(200).json({
            success: true,
            message: "Lists should be here"
        });
    }, 10000);

});

APIRouter.post("/login", (req: Request, res: Response) => {
   let pw = req.body.password;
   let user = req.body.username;
   let success = false;

   //check database for match
   success = (user == "manindraa" && pw == "Password123");

   res.status(200).json({
      username: user,
      success: success
   });
});

APIRouter.use("/user", UserRouter);


export default APIRouter;