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

UserRouter.post("/update", (req: Request, res: Reponse) => {
    if (!req.body.userData || !req.body.email) {
        res.status(400).send("Broken request!");
    } else {
        UserController.saveUser(req.body.email, req.body.userData).then((data) => {
            res.status(200).json(data);
        });
    }
});

UserRouter.post("/add.list", (req: Request, res: Response) => {
    if (!req.body.listData || !req.body.userEmail) {
        res.status(400).send("Broken Request");
    } else {
        ListController.newList(req.body.listData,
            req.body.userEmail).then((status) => {
                res.status(200).json(status);
        });
    }
});

UserRouter.post("/list", (req:Request, res: Response) => {
    if (!req.body.listData || !req.body.userEmail) {
        res.status(400).send("Broken request.");
    } else {
        ListController.saveList(req.body.listData).then((data) => {
            res.status(200).json(data);
        });
    }
});

UserRouter.get("/list/:listId", (req: Request, res: Response) => {
    ListController.getList(req.params.listId).then((data) => {
        res.status(200).json(data);
    }).catch((err: Error) => {
        res.send(500).send(err.message);
    })
})

UserRouter.get("/:em", (req: Request, res: Response) => {
    if (req.params.em) {
        UserController.getUserData(req.params.em).then((data) => {
            res.status(200).json(data);
        })
    } else {
        res.status(400).send("Broken request.");
    }
});

UserRouter.get("/:em/lists", (req: Request, res: Response) => {
    if (req.params.em) {
        ListController.getListsForUser(req.params.em).then((data) => {
            res.status(200).json(data);
        })
    } else {
        res.status(400).send("Broken request.");
    }
});

export default UserRouter;