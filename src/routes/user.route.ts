import { Router, Request, Response } from 'express';
import User from '../models/user.model';

const UserRouter =  Router();

UserRouter.post("/", (req: Request, res: Response) => {
    let user = new User({
        firstName: "Farhan",
        lastName: "Darma"
    });

    user.save().then((u) => {
        res.send("User saved!");
    });
});

export default UserRouter;