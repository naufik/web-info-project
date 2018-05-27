import { Router, Request, Response } from 'express';
import { UserData, UserController } from '../controllers/user.controller';
import { ListController } from '../controllers/list.controller';

const UserRouter = Router();

UserRouter.post("/", (req: Request, res: Response) => {
    if (!req.body.userData) {
        res.status(400).send("Broken Request!");
    } else {
        UserController.registerUser(req.body.userData).then((status: any) => {
            if (status.success) {
                res.status(201).json(status);
            } else {
                res.status(400).send(status.error);
            }
        })
    }
});

UserRouter.post("/update", (req: Request, res: Response) => {
    
    if (!req.body.userData || !req.body.email || !req.user) {
        res.status(400).send("Broken request!");
    } else {
        if (req.user.email !== req.body.email) {
            res.status(403).send({
                success: false,
                error: new Error("Forbidden")
            });
            return;
        }
        UserController.saveUser(req.user.email, req.body.userData).then((data) => {
            res.status(200).json(data);
        });
    }

});

UserRouter.post("/add.list", (req: Request, res: Response) => {
    
    if (!req.body.listData || !req.body.userEmail) {
        res.status(400).send("Broken Request");
    } else {
        if (!req.user) {
            res.status(403).send({
                success: false,
                error: new Error("Forbidden.")
            });
            return;
        }
        ListController.newList(req.body.listData,
            req.user.email).then((status) => {
                res.status(200).json(status);
            });
    }

});

UserRouter.post("/list", (req:Request, res: Response) => {
    
    if (!req.body.listData || !req.body.userEmail || !req.user) {
        res.status(400).send("Broken request.");
    } else {
        if (!req.user) {
            res.status(403).send({
                success: false,
                error: new Error("Forbidden")
            });
            return;
        }
        ListController.saveList(req.body.listData).then((data) => {
            res.status(200).json(data);
        });
    }

});

UserRouter.get("/list/:listId", (req: Request, res: Response) => {

    if (!req.user){
        res.status(403).send("Forbidden.");
    } else {
        ListController.getList(req.params.listId).then((data) => {
            res.status(200).json(data);
        }).catch((err: Error) => {
            res.send(500).send(err.message);
        });
    }

})

UserRouter.get("/:em", (req: Request, res: Response) => {
    
    if (!req.user) {
        res.status(403).send("Forbidden");
        return;
    }

    UserController.getUserData(req.user.email).then((data) => {
        res.status(200).json(data);
    });

});

UserRouter.get("/:em/lists", (req: Request, res: Response) => {

    if (!req.user) {
        res.status(403).send("Forbidden");
        return;
    }

    ListController.getListsForUser(req.user.email).then((data) => {
        res.status(200).json(data);
    });

});

UserRouter.post("/:em/:stash", (req: Request, res: Response) => {
    if (req.params.em && req.params.stash && req.body.contents) {

        if (!req.user || req.user.email !== req.params.em) {
            res.status(403).send("Forbidden.")
            return;
        }

        switch (req.params.stash) {
            case "groceries":
                UserController.setGroceries(req.user.email, req.body.contents).then((result) => {
                    res.status(200).json(result);
                });
            case "fridge":
                UserController.setFridge(req.user.email, req.body.contents).then((result) => {
                    res.status(200).json(result);
                });
            default:
                break;
        }

    } else {
        res.status(400).send("Broken request.");
    }
});

UserRouter.get('/session', (req: Request, res: Response) => {
    if (!req.user) {
        res.status(403).send("Forbidden.")
    } else {
        res.status(200).json(req.user);
    }
});
export default UserRouter;