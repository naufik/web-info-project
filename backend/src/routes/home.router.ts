import { Router, Request, Response } from 'express';

const router = Router();

/** write your router configuration here */

router.get('/hello', (req: Request, res: Response) => {
	//this function is just an example
	res.send("Hello World");
});


/** exports the router */
export default router;