// import statement used by TS and newer versions of JavaScript.
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as CORS from 'cors';
import * as Mongoose from 'mongoose';
import * as Bluebird from 'bluebird';

/**
	Is a class really necessary? 
	I'm thinking we could just write this straight out as a script file :/
	We'll change that lataer
*/
export class App {
	public app: Express.Application;

	constructor() {
		this.app = Express();

		this.configure();
		this.routes();
	}

	/**
		Configures the server.
	*/
	public configure() {
		// Required by Express
		this.app.use(BodyParser.json());
		this.app.use(BodyParser.urlencoded({extended: true}));

		// For easier front-end testing, browsers often reject responses created by servers hosted in another domain.
		// If we have a backend in Heroku and testing our frontend in localhost, most responses by the server will be rejected.
		this.app.use(CORS());

		// For mongoDB later on
		(<any>Mongoose).Promise = Bluebird; 
	}

	/**
		Sets up all the routes.
		@todo imports the route and fill this with actual configuration.
	*/
	public routes() {
		
	}
}

export default new App().app;

