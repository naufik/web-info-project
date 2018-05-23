// import statement used by TS and newer versions of JavaScript.
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as CORS from 'cors';
import * as Mongoose from 'mongoose';
import * as Bluebird from 'bluebird';
import * as Path from 'path';
import * as Passport from 'passport';
import * as Session from 'express-session';
import DB from './database';

/** Import Routers */
import HomeRouter from './routes/home.router';
import APIRouter from './routes/api.router';

export class App {
	public app: Express.Application;

	constructor() {
		this.app = Express();

		this.configure();
		this.routes();
		this.app.listen(process.env.PORT || 3000);
	}

	/**
		Configures the server.
	*/
	public configure() {
		// Required by Express
		this.app.use(BodyParser.json());
		this.app.use(BodyParser.urlencoded({extended: true}));

        // For express sessions
        this.app.use(Session({ secret: 'RIP spiderman' }));

		// For authentication purposes
        this.app.use(Passport.initialize());
        this.app.use(Passport.session());

		// For easier front-end testing, browsers often reject responses created by servers hosted in another domain.
		// If we have a backend in Heroku and testing our frontend in localhost, most responses by the server will be rejected.
		this.app.use(CORS());

		// For mongoDB later on
		(<any>Mongoose).Promise = Bluebird;

		// Database callbacks
        DB.once('open', () => {
            console.log("Connection success");
        });

        // Database error callbacks
        DB.on('error', (err: Error) => {
            console.log("error happened" + err.message);
        });

	}

	/**
		Sets up all the routes to the express application.
		@todo import the routes and fill this with actual configuration.
	*/
	public routes() {
		this.app.use(Express.static(Path.join(__dirname, '/views')));

		this.app.use("/api", APIRouter);

        this.app.get("/*", (req, res) => {
            res.sendFile(Path.join(__dirname, 'views', 'index.html'));
        });
    }
}

export default new App().app;
