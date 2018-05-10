import { Router, Request, Response } from 'express';
import { UserData, UserController } from '../controllers/user.controller';
import { ListController } from '../controllers/list.controller';

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

UserRouter.post("/add.list", (req: Request, res: Response) => {
    if (!req.body.listName || !req.body.listUrl || !req.body.userEmail) {
        res.status(400).send("Broken Request");
    } else {
        ListController.newList(req.body.listUrl,
            req.body.listName,
            req.body.userEmail).then((status) => {
                res.status(200).json(status);
        })
    }
});

UserRouter.get('/:em', (req: Request, res: Response) => {
    if (req.params.em) {
        UserController.getUserData(req.params.em).then((data) => {
            res.status(200).json(data);
        })
    } else {
        res.status(400).send("Broken request.");
    }
});

export default UserRouter;