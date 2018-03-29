webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <soon></soon>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soon_soon_component__ = __webpack_require__("./src/app/soon/soon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__soon_soon_component__["a" /* SoonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/soon/soon.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n  text-align: center;\r\n  font-family: 'Basic', sans-serif;\r\n  margin-bottom: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.page-header > h1 {\r\n  font-size: 280%;\r\n  font-weight: 600;\r\n}\r\n\r\n.section-header:hover {\r\n  border-bottom: 2px solid #00448f;\r\n}\r\n\r\n.page-content {\r\n  background: rgba(255,255,255,0.85);\r\n  font-family: 'Merriweather', serif;\r\n}\r\n\r\n.page-content > .row {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n}\r\n\r\n.page-tagline {\r\n\r\n}\r\n\r\n.page-tagline > div {\r\n  font-size: 1.2em;\r\n  height: 2.4em;\r\n}\r\n\r\n.section-header {\r\n  font-size: 1.6em;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid #cccccc;\r\n  font-family: 'Basic', sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.section-icon {\r\n  margin-right: 10px;\r\n}\r\n\r\na {\r\n  font-weight: 600;\r\n  color: black;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  border-bottom: 3px solid #00448f;\r\n}\r\n\r\n.section {\r\n  margin-top: 2px;\r\n}\r\n\r\n.section > p {\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/soon/soon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top-level\">\n  <div class=\"row\">\n    <div class=\"col-3\">\n\n    </div>\n    <div class=\"col-6 page-content\">\n      <div class=\"page-header\">\n        <h1>DueDate</h1>\n        <div class=\"page-tagline\">\n          <div>{{ taglines[taglineIndex] }}{{ dots }}</div>\n        </div>\n      </div>\n      <div class=\"row\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"section\">\n            <div class=\"section-header\" (click)=\"collapse(0)\"><i class=\"fas fa-briefcase section-icon\"></i>What's Going On?</div>\n              <div *ngIf=\"!collapsearr[0]\">\n                <p>We're trying to revolutionize the way you do your groceries, and\n                 reduce problematic food waste. </p>\n                <p>Think about a world where there are less food wasted, and more food eaten. Think about a world\n                where you can save money because you remember to cook everything on your fridge.</p>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"section\">\n            <div class=\"section-header\" (click)=\"collapse(1)\"><i class=\"fas fa-users section-icon\"></i>The Team</div>\n              <div *ngIf=\"!collapsearr[1]\">\n                <p>Brought to you with <i class=\"fas fa-heartbeat\"></i> by team Titanic Overflow</p>\n                <ul *ngFor=\"let m of members\">\n                  <li><a [href]=\"getGithubLink(m.github)\">{{ m.name }}</a></li>\n                </ul>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/soon/soon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoonComponent = /** @class */ (function () {
    function SoonComponent() {
        this.dots = "";
        this.taglineIndex = 0;
        // taglines: string[] = [
        //   "Revolutionizing the grocery shopping experience.",
        //   "The future of groceries... coming soon.",
        //   "Groceries, made easy. Soon.",
        //   "We're still cooking, please wait.",
        //   "Helping your grocery experience, later tho.",
        //   "Your local grocery helper. Coming to your neighborhood soon."
        // ]
        this.taglines = [
            "Still cooking, please wait",
            "Preparing",
            "Bringing a local grocery helper to your neighborhood",
            "Making groceries easy",
            "Making groceries easy for you",
            "Revolutionizing the grocery shopping experience",
            "Trying to understand JavaScript promises",
            "Under construction",
            "Trying to reduce global food waste problem",
            "Judging people who don't finish food in restaurants",
            "Indexing best-before dates",
            "Please come back soon! We're not done yet",
            "Throwing away broken fridges that used to be cool",
            "Coming to a neighborhood near you",
            "Packing our stuff",
            "Arguing whether WebStorm is better than Sublime",
            "Being taken to Medical Building rather than Redmond Barry by muscle memory",
            "Standing in a line in STOP1",
            "Trying to think of a good commit message",
            "Thinking of a good Kahoot display name",
            "Accumulating bonus points",
            "Reorganizing the fridge",
            "Extending 15-minute interviews to 1 hour",
            "Attending tutorials",
            "Trying to enrol in obsolete Bachelor of Engineering",
            "Forcing my groupmates to npm install prettier",
            "Going to free pizzas rather than eating leftover foods",
            "Throwing away leftovers",
            "Teaching food how to code in CoffeeScript",
            "Wishing team 51 a nice day",
            "Regretting our group name because we thought of a better one",
            "Deciding who should pitch the idea in the last workshop",
            "Skipping other subjects to do INFO30005",
            "Trying to help you shop",
            "Doing some math with CSS paddings",
            "Bringing the future of groceries in the future",
            "Sneaking in the commerce faculty to look for someone to sell this",
            "Reminding you all to drink enough water",
            "Trying to escape callback hell",
            "Learning JavaScript from W3Schools",
            "Submitting deliverables",
            "Resolving merge conflicts in package-lock.json",
            "We should be doing other assignments now",
            "Is your refrigerator running?",
            "Be right back, getting life unit"
        ];
        this.color = "blue";
        /**
            @todo add your own data here, WebStorm will complain if the data is in the wrong format thank to TypeScript type-checking.
        */
        this.members = [
            {
                name: "Naufal Fikri Setiawan",
                github: "naufik"
            },
            {
                name: "Farhan Darma",
                github: "fdarma"
            },
            {
                name: "Manindra Arora",
                github: "maniarora"
            }
        ];
        this.collapsearr = [true, true];
    }
    SoonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomize();
        setInterval(function () { _this.animate(); }, 1000);
    };
    SoonComponent.prototype.animate = function () {
        if (this.dots === "...") {
            this.randomize();
            this.dots = "";
        }
        else {
            this.dots += ".";
        }
    };
    /**
        Method to obtain the github link of a given username.

        @param username the username of the user.
    */
    SoonComponent.prototype.getGithubLink = function (username) {
        return "http://github.com/" + username;
    };
    SoonComponent.prototype.randomize = function () {
        var _this = this;
        var rand = function () { return Math.floor(Math.random() * (_this.taglines.length - 0.01)); };
        var r = rand();
        while (r === this.taglineIndex) {
            r = rand();
        }
        this.taglineIndex = r;
    };
    SoonComponent.prototype.collapse = function (menu) {
        this.collapsearr[menu] = !this.collapsearr[menu];
    };
    SoonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'soon',
            template: __webpack_require__("./src/app/soon/soon.component.html"),
            styles: [__webpack_require__("./src/app/soon/soon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SoonComponent);
    return SoonComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map