import { Router, Request, Response } from 'express';
import * as Passport from 'passport';
import { Strategy } from 'passport-local';
import * as Crypto from 'crypto';

import User from '../models/user.model';

const AuthRouter = Router();

AuthRouter.post('/', (req, res) => Passport.authenticate('local', { 
	successRedirect: '/main', 
	failureRedirect: '/'
	}));

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

Passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
	return done(null, user);
  }, (err: Error) => {
  	done(err, null);
  });
});