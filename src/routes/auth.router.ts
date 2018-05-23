import { Router, Request, Response } from 'express';
import * as Passport from 'passport';
import { Strategy } from 'passport-local';
import * as Crypto from 'crypto';

import User from '../models/user.model';

const AuthRouter = Router();

AuthRouter.post('/', (req, res, next) => {
	Passport.authenticate('local', (err, user, info) => {
		if (err) {
			return res.status(400).send(err.message);
		}
		req.login(user, (err) => {
			if (err){
				return res.status(400).send(err.message);
			}
			return res.status(200).json({
				success: true,
				data: user
			});
		});
	})(req, res, next);
});

AuthRouter.post('logout/', (req, res, next) => {
	req.logOut();
	return res.status(200).json({
		success: true,
		data: {}
	});
});

Passport.use(new Strategy((username: string, passwd: string, done: Function) => {
	User.findOne({
		email: username
	}).then((user: any) => {

		if (!user) {
			return done(null, false, { message: 'Cannot Login' });
		}

		let currentHash = Crypto.createHash('sha256').update(passwd)
			.digest('hex');

		if (currentHash != user.password) {
			return done(null, false, { message: 'Cannot Login' });
		}

		return done(null, user);
	}, (err: Error) => {
		done(err, null);
	});

}));

Passport.serializeUser((user: any, done: Function)  => {
  return done(null, user._id);
});

Passport.deserializeUser((id: any, done: Function) => {
  User.findById(id).then((user: any) => {
	return done(null, user);
  }, (err: Error) => {
  	done(err, null);
  });
});

export default AuthRouter;