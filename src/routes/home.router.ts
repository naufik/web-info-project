import { Router, Request, Response } from 'express';

const router = Router();

/** write your router configuration here */

router.get("/", (req: Request, res: Response) =>{
    res.send("Hello");
});

/** exports the router */
export default router;