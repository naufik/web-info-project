import { Router, Request, Response } from 'express';
import * as Express from 'express';
import * as Path from 'path';

const router = Router();

/** write your router configuration here */

router.use("/", Express.static(Path.join(__dirname,"../..", "views")));
/** exports the router */
export default router;