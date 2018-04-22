// import statement used by TS and newer versions of JavaScript.
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as CORS from 'cors';
import * as Mongoose from 'mongoose';
import * as Bluebird from 'bluebird';
import * as Path from 'path';
import * as ServeStatic from 'serve-static';

/** Import Routers */
import HomeRouter from './routes/home.router';

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
		this.app.listen(process.env.PORT || 3000);
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
		Sets up all the routes to the express application.
		@todo import the routes and fill this with actual configuration.
	*/
	public routes() {
		// this.app.use(Express.static( Path.join(__dirname, '/views')));
		// this.app.use(Express.static('/home/naufik/Documents/web-info-project/src/views/'));

		this.app.use(Express.static(Path.join(__dirname, '/views')));
		
		this.app.get("/*", (req, res) => {
			res.sendFile(Path.join(__dirname, 'views', 'index.html'));
		});

		// this.app.use('/', (req, res, next) => {
		// 	console.log("URL: ", req.url);
		// 	var expressStatic = Express.static(path);
		// 	expressStatic(req, res, next);
		// })
		// this.app.use("/", HomeRouter);
		// console.log(__dirname);
	}
}

export default new App().app;
