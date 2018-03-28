"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import statement used by TS and newer versions of JavaScript.
var Express = require("express");
var BodyParser = require("body-parser");
var CORS = require("cors");
var Mongoose = require("mongoose");
var Bluebird = require("bluebird");
/** Import Routers */
var home_router_1 = require("./routes/home.router");
/**
    Is a class really necessary?
    I'm thinking we could just write this straight out as a script file :/
    We'll change that lataer
*/
var App = (function () {
    function App() {
        this.app = Express();
        this.configure();
        this.routes();
        this.app.listen(process.env.PORT || 3000);
    }
    /**
        Configures the server.
    */
    App.prototype.configure = function () {
        // Required by Express
        this.app.use(BodyParser.json());
        this.app.use(BodyParser.urlencoded({ extended: true }));
        // For easier front-end testing, browsers often reject responses created by servers hosted in another domain.
        // If we have a backend in Heroku and testing our frontend in localhost, most responses by the server will be rejected.
        this.app.use(CORS());
        // For mongoDB later on
        Mongoose.Promise = Bluebird;
    };
    /**
        Sets up all the routes to the express application.
        @todo import the routes and fill this with actual configuration.
    */
    App.prototype.routes = function () {
        // this.app.use("/", Express.static(__dirname + "/views/"));
        this.app.use("/", home_router_1.default);
    };
    return App;
}());
exports.App = App;
exports.default = new App().app;
