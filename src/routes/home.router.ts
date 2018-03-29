import { Router, Request, Response } from 'express';
import * as Express from 'express';


const router = Router();

/** write your router configuration here */

router.use("/", Express.static())
/** exports the router */
export default router;