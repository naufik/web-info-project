import { Router, Request, Response } from 'express';
import { UserData, UserController } from '../controllers/user.controller';

const UserRouter = Router();

UserRouter.post("/", (req: Request, res: Response) => {
    if (!req.body.userData) {
        res.status(400).send("Broken Request!");
    } else {
        UserController.registerUser(req.body.userData).then((status) => {
            if (status.success) {
                res.status(201).json(status);
            } else {
                res.status(400).send((<any>status).error);
            }
        })
    }
});

export default UserRouter;