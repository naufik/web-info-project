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

/***/ "./src/app/add-recipes/add-recipes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-recipes/add-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" name=\"listname\" placeholder=\"Insert Name...\" #listnamebox>\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"submitForm(listnamebox.value)\">Done</button>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-recipes/add-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRecipesComponent; });
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

var AddRecipesComponent = /** @class */ (function () {
    function AddRecipesComponent() {
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AddRecipesComponent.prototype.ngOnInit = function () {
    };
    AddRecipesComponent.prototype.submitForm = function (name) {
        this.submit.emit(name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddRecipesComponent.prototype, "submit", void 0);
    AddRecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-recipe',
            template: __webpack_require__("./src/app/add-recipes/add-recipes.component.html"),
            styles: [__webpack_require__("./src/app/add-recipes/add-recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddRecipesComponent);
    return AddRecipesComponent;
}());



/***/ }),

/***/ "./src/app/all-lists/all-lists.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n}\r\n\r\n.main1{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.search{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  padding-top: 10px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.main2{\r\n  margin-top: 5px;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 20% auto;\r\n      grid-template-columns: 20% auto;\r\n  border: 1px solid #2e3038;\r\n  border-radius: 10px;\r\n}\r\n\r\n.tit{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 1/2;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 40% 35% 14% 13%;\r\n      grid-template-columns: 40% 35% 14% 13%;\r\n}\r\n\r\napp-recipe{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  margin-top: 5px;\r\n}\r\n\r\nh1{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  font-size: 1.6em;\r\n  margin-top: 20px;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n  margin-left: 5px;\r\n}\r\n\r\na{\r\n  color: black;\r\n}\r\n\r\nimg{\r\n  height: 150px;\r\n  max-width: 100%;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n  border-top-left-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n  border-right: 1px solid #2e3038;\r\n}\r\n\r\n.titlename{\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n}\r\n\r\n.section-icon{\r\n  margin-bottom: 1px;\r\n}\r\n\r\nhr{\r\n  margin: 2px;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n\r\n.btn-group{\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 3/4;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n}\r\n\r\n.btn-group2{\r\n  -ms-grid-column: 4;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 4/5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/all-lists/all-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin');\r\n</style>\r\n\r\n<app-logged-header></app-logged-header>\r\n\r\n<div class=\"main1\">\r\n  <div class=\"tit\">\r\n    <div class=\"titlename\">\r\n      MY LISTS <a [routerLink]=\"['/lists']\" (click)=\"toggleAdd()\"><i class=\"fas fa-edit section-icon\"></i></a>\r\n    </div>\r\n    <div class=\"btn-group\">\r\n      Sorting\r\n      <button type=\"button\" class=\"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle Dropdown</span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <h6 class=\"dropdown-header\">When Created</h6>\r\n        <a class=\"dropdown-item\" href=\"#\">Newest First</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Oldest First</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Alphabetic</a>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"btn-group2\">\r\n      Show\r\n      <button type=\"button\" class=\"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle Dropdown</span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <a class=\"dropdown-item\" href=\"#\">My Groceries</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Recipes</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Lists</a>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"main\">\r\n  <hr>\r\n</div>\r\n\r\n<div class=\"main\">\r\n  <div class=\"search\">\r\n    <add-recipe (submit)=\"addList($event)\" *ngIf=\"add\"></add-recipe>\r\n  </div>\r\n</div>\r\n\r\n<!--[(ngModel)]=\"formData.lastName\" name=\"lastName\"-->\r\n\r\n<div class=\"main\">\r\n  <div class=\"main2\">\r\n    <a href=\"\">\r\n      <img class=\"img\" src=\"assets/grocery.jpg\">\r\n    </a>\r\n    <h1><a [routerLink]=\"['/groceries']\" >My Groceries</a></h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"main\" *ngFor=\"let recipe of allLists\">\r\n  <app-recipe [data]=\"recipe\"></app-recipe>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/all-lists/all-lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataretriever_service__ = __webpack_require__("./src/app/dataretriever.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ListData} from "../auth.service";
var AllListsComponent = /** @class */ (function () {
    function AllListsComponent(ds) {
        this.email = "john@john.com";
        this.add = false;
        this.formData = {
            name: "",
            url: "",
            contents: []
        };
        this.service = ds;
    }
    AllListsComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AllListsComponent.prototype.refresh = function () {
        this.getLists();
    };
    // addToLists(listName: string) {
    //   this.service.addNewList({
    //     name: listName,
    //     url: listName.toLowerCase(),
    //     contents: []
    //   });
    //   this.refresh();
    //   this.toggleAdd();
    // }
    AllListsComponent.prototype.toggleAdd = function () {
        this.add = !this.add;
    };
    AllListsComponent.prototype.addList = function (name) {
        var newList = {
            name: name,
            url: name.replace(" ", "-").toLowerCase(),
            contents: []
        };
        this.service.newList(this.email, newList).then(function (result) {
            console.log("test works");
        });
        this.refresh();
        this.toggleAdd();
    };
    AllListsComponent.prototype.getLists = function () {
        var _this = this;
        this.service.getUserData(this.email).then(function (result) {
            console.log(result);
            return Promise.all(result.lists.map(function (x) { return _this.service.getListWithId(x); }));
        }).then(function (listOfLists) {
            _this.allLists = listOfLists;
        });
    };
    AllListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all-lists',
            template: __webpack_require__("./src/app/all-lists/all-lists.component.html"),
            styles: [__webpack_require__("./src/app/all-lists/all-lists.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]])
    ], AllListsComponent);
    return AllListsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--<soon></soon>-->\n  <router-outlet></router-outlet>\n</div>\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__soon_soon_component__ = __webpack_require__("./src/app/soon/soon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fooditem_fooditem_component__ = __webpack_require__("./src/app/fooditem/fooditem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logged_header_logged_header_component__ = __webpack_require__("./src/app/logged-header/logged-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mainpage_mainpage_component__ = __webpack_require__("./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__listitem_listitem_component__ = __webpack_require__("./src/app/listitem/listitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fridge_fridge_component__ = __webpack_require__("./src/app/fridge/fridge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grocery_list_grocery_list_component__ = __webpack_require__("./src/app/grocery-list/grocery-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__item_list_item_list_component__ = __webpack_require__("./src/app/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__listcontainer_listcontainer_component__ = __webpack_require__("./src/app/listcontainer/listcontainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__fridgeitem_fridgeitem_component__ = __webpack_require__("./src/app/fridgeitem/fridgeitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__all_lists_all_lists_component__ = __webpack_require__("./src/app/all-lists/all-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__recipe_recipe_component__ = __webpack_require__("./src/app/recipe/recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list_page_list_page_component__ = __webpack_require__("./src/app/list-page/list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_recipes_add_recipes_component__ = __webpack_require__("./src/app/add-recipes/add-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__list_appender_list_appender_component__ = __webpack_require__("./src/app/list-appender/list-appender.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    // { path: '', component: SoonComponent },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_12__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: 'fridge', component: __WEBPACK_IMPORTED_MODULE_15__fridge_fridge_component__["a" /* FridgeComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_14__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'groceries', component: __WEBPACK_IMPORTED_MODULE_16__grocery_list_grocery_list_component__["a" /* GroceryListComponent */] },
    { path: 'lists', component: __WEBPACK_IMPORTED_MODULE_20__all_lists_all_lists_component__["a" /* AllListsComponent */] },
    { path: 'lists/:listid', component: __WEBPACK_IMPORTED_MODULE_22__list_page_list_page_component__["a" /* ListPageComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__soon_soon_component__["a" /* SoonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__fooditem_fooditem_component__["a" /* FooditemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__logged_header_logged_header_component__["a" /* LoggedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__listitem_listitem_component__["a" /* ListitemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__fridge_fridge_component__["a" /* FridgeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__grocery_list_grocery_list_component__["a" /* GroceryListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__item_list_item_list_component__["a" /* ItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__listcontainer_listcontainer_component__["a" /* ListcontainerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__fridgeitem_fridgeitem_component__["a" /* FridgeitemComponent */],
                __WEBPACK_IMPORTED_MODULE_20__all_lists_all_lists_component__["a" /* AllListsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__recipe_recipe_component__["a" /* RecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__list_page_list_page_component__["a" /* ListPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__add_recipes_add_recipes_component__["a" /* AddRecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__list_appender_list_appender_component__["a" /* ListAppenderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_LOGIN = "http://to-dd.herokuapp.com/api/login/";
var API_SIGNUP = "http://to-dd.herokuapp.com/api/user/";
;
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, passwd) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_LOGIN, {
                loginEmail: email,
                loginPassword: passwd
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data.token);
                }
                else {
                    reject(data.error);
                }
            });
        });
    };
    AuthService.prototype.signUp = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_SIGNUP, {
                userData: data
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    if (data) {
                        reject(new Error(data.error));
                    }
                    else {
                        reject(new Error("Unknown error"));
                    }
                }
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dataretriever.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRetrieverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** GET URL */
var API_URL = "http://to-dd.herokuapp.com/api/";
/** placeholder hardcoded data */
var allLists = [
    {
        name: "Tuna Sandwich",
        url: "tuna",
        contents: [{
                name: "Tuna",
                qty: 2.5,
                unit: "kg+s"
            },
            {
                name: "Bread",
                qty: 2
            },
            {
                name: "Tomatoes",
                qty: 0.5,
                unit: "g+s"
            },
            {
                name: "Cheese",
                qty: 2,
                unit: "slice+s"
            },
            {
                name: "Lettuce",
                qty: 3,
                unit: "slice+s"
            }]
    },
    {
        name: "Kids Favorites",
        url: "kids-favs",
        contents: [{
                name: "Sausages",
                qty: 3,
                unit: "kg+s"
            },
            {
                name: "Beans",
                qty: 5,
                unit: "can+s"
            },
            {
                name: "Cereal",
                qty: 2,
                unit: "package+s"
            },
            {
                name: "Milk",
                qty: 1,
                unit: "carton+s"
            },
            {
                name: "Broccoli",
                qty: 20,
                unit: "slice+s"
            }]
    }, {
        name: "Not for the Kids",
        url: "alcohol",
        contents: [{
                name: "Wine",
                qty: 2,
                unit: "bottle+s"
            }, {
                name: "Whisky",
                qty: 1,
                unit: "bottle+s"
            }]
    }
];
var allFridge = [
    {
        name: "Milk",
        qty: 3,
        expiry: new Date(new Date().setDate((new Date().getDate()) + 4))
    },
    {
        name: "Snappers",
        qty: 2,
        expiry: new Date(new Date().setDate((new Date().getDate()) + 3))
    },
    {
        name: "Beef",
        qty: 1,
        unit: "kg+s",
        expiry: new Date(new Date().setDate((new Date().getDate()) + 7))
    },
    {
        name: "Eggs",
        qty: 5,
        unit: "pc+s",
        expiry: new Date(new Date().setDate((new Date().getDate()) + 1))
    }
];
var DataRetrieverService = /** @class */ (function () {
    function DataRetrieverService(http) {
        this.http = http;
    }
    DataRetrieverService.prototype.getLists = function () {
        return allLists;
    };
    DataRetrieverService.prototype.getFridge = function () {
        return allFridge;
    };
    DataRetrieverService.prototype.addData = function (data) {
        allFridge.push(data);
    };
    DataRetrieverService.prototype.addNewList = function (data) {
        allLists.push(data);
    };
    DataRetrieverService.prototype.getUserData = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(API_URL + "user/" + email).subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    reject(data.error);
                }
            });
        });
    };
    DataRetrieverService.prototype.getListWithId = function (listId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(API_URL + "user/list/" + listId).subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    reject(data.error);
                }
            });
        });
    };
    DataRetrieverService.prototype.getListsForUser = function (userEmail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(API_URL + "user/" + userEmail + "/lists").subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    if (data) {
                        reject(data.error);
                    }
                    else {
                        reject(new Error("Unknown Error"));
                    }
                }
            });
        });
    };
    DataRetrieverService.prototype.saveUser = function (userData, userEmail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL, {
                email: userEmail,
                data: userData
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    reject(data.err);
                }
            });
        });
    };
    DataRetrieverService.prototype.newList = function (userEmail, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + "user/add.list/", {
                userEmail: userEmail,
                listData: data
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    reject(data.err);
                }
            });
        });
    };
    DataRetrieverService.prototype.saveList = function (userEmail, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + "user/list/", {
                userEmail: userEmail,
                listData: data
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data.data);
                }
                else {
                    if (data) {
                        reject(data.err);
                    }
                    else {
                        reject(new Error("Unknown error"));
                    }
                }
            });
        });
    };
    DataRetrieverService.prototype.saveFridge = function (userEmail, contents) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + "user/" + userEmail + "/fridge", {
                contents: contents
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data);
                }
                else {
                    if (data) {
                        reject(data.error);
                    }
                    else {
                        reject(new Error("Unknown Error"));
                    }
                }
            });
        });
    };
    DataRetrieverService.prototype.saveGroceries = function (userEmail, contents) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + "user/" + userEmail + "/groceries", {
                contents: contents
            }).subscribe(function (data) {
                if (data.success) {
                    resolve(data);
                }
                else {
                    if (data) {
                        reject(data.error);
                    }
                    else {
                        reject(new Error("Unknown Error"));
                    }
                }
            });
        });
    };
    DataRetrieverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataRetrieverService);
    return DataRetrieverService;
}());



/***/ }),

/***/ "./src/app/fooditem/fooditem.component.css":
/***/ (function(module, exports) {

module.exports = ".fooditem {\n  display: block;\n  float: left;\n  background-color: white;\n  margin: 2px;\n}\n\n.todd-item-img {\n  \n}\n\n.todd-item-caption > p {\n  float: none;\n}"

/***/ }),

/***/ "./src/app/fooditem/fooditem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fooditem\" [style.height.px]=\"height\" [style.width.px]=\"width\" (click)=\"onClick()\">\n  <div class=\"container\">\n    <div class=\"row todd-item-img\">\n      <img src=\"{{ food.imgSrc }}\">\n    </div>\n    <div class=\"row todd-item-caption\">\n      <p>{{ food.name }}</p>\n      <p>{{ daysToDue() }} day(s)</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fooditem/fooditem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemComponent; });
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

var FooditemComponent = /** @class */ (function () {
    function FooditemComponent() {
        this.height = 300;
        this.width = 300;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    FooditemComponent.prototype.onClick = function () {
        this.click.emit(this.food);
    };
    FooditemComponent.prototype.ngOnInit = function () {
    };
    FooditemComponent.prototype.daysToDue = function () {
        return (this.food.expiry.valueOf() - (new Date()).valueOf());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FooditemComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FooditemComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FooditemComponent.prototype, "food", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], FooditemComponent.prototype, "click", void 0);
    FooditemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'food-item',
            template: __webpack_require__("./src/app/fooditem/fooditem.component.html"),
            styles: [__webpack_require__("./src/app/fooditem/fooditem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooditemComponent);
    return FooditemComponent;
}());



/***/ }),

/***/ "./src/app/fridge/fridge.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n}\r\n\r\n.tit{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 1/2;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 40% 30% 14% 13%;\r\n      grid-template-columns: 40% 30% 14% 13%;\r\n  border-bottom: 1px solid black;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.search{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  padding-top: 10px;\r\n  padding-right: 20px;\r\n}\r\n\r\napp-fridgeitem{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  background: rgba(255,255,255,0.75);\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\napp-fridgeitem:hover{\r\n  background: rgba(255,255,255,0.5);\r\n}\r\n\r\n.main2{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n  margin: 0px;\r\n}\r\n\r\n.titlename{\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n}\r\n\r\n.section-icon{\r\n  margin-bottom: 1px;\r\n}\r\n\r\nhr{\r\n  margin: 0px;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  background: rgba(255,255,255,0.50);\r\n  color: black;\r\n}\r\n\r\n.btn-group{\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 3/4;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n}\r\n\r\n.btn-group2{\r\n  -ms-grid-column: 4;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 4/5;\r\n}\r\n\r\n.click{\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/fridge/fridge.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n<style>\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin');\n</style>\n\n<app-logged-header></app-logged-header>\n<br>\n\n<div class=\"main\">\n  <div class=\"tit\">\n    <div class=\"titlename\">\n      WHAT'S ON MY FRIDGE  <a (click)=\"toggleAdd()\" class=\"\"><i class=\"fas fa-edit section-icon\"></i></a>\n    </div>\n\n    <div class=\"btn-group\">\n      Sorting\n      <button type=\"button\" class=\"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n        <h6 class=\"dropdown-header\">When Added</h6>\n        <a class=\"dropdown-item\" href=\"#\">Newest First</a>\n        <a class=\"dropdown-item\" href=\"#\">Oldest First</a>\n        <div class=\"dropdown-divider\"></div>\n        <h6 class=\"dropdown-header\">Expiry</h6>\n        <a class=\"dropdown-item\" href=\"#\">Ascending</a>\n        <a class=\"dropdown-item\" href=\"#\">Descending</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Alphabetic</a>\n      </ul>\n    </div>\n\n    <div class=\"btn-group2\">\n      Show\n      <button type=\"button\" class=\"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n        <h6 class=\"dropdown-header\">Expired In</h6>\n        <a class=\"dropdown-item\" href=\"#\">Day</a>\n        <a class=\"dropdown-item\" href=\"#\">Week</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Food</a>\n        <a class=\"dropdown-item\" href=\"#\">Drink</a>\n\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"main\">\n  <hr>\n</div>\n\n<div class=\"main\">\n  <div class=\"search\">\n    <add-recipe (submit)=\"addNew($event)\" *ngIf=\"add\"></add-recipe>\n  </div>\n</div>\n\n<div class=\"main2\" *ngFor=\"let item of data\">\n  <app-fridgeitem [itemsrc]=\"item\"></app-fridgeitem>\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/fridge/fridge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FridgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataretriever_service__ = __webpack_require__("./src/app/dataretriever.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FridgeComponent = /** @class */ (function () {
    function FridgeComponent(service) {
        this.add = false;
        this.userEmail = "john@john.com";
        this.fridgeService = service;
    }
    FridgeComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    FridgeComponent.prototype.refresh = function () {
        var _this = this;
        this.fridgeService.getUserData(this.userEmail).then(function (data) {
            _this.data = data.fridge;
        });
    };
    FridgeComponent.prototype.addNew = function (itemName) {
        var _this = this;
        this.data.push({
            name: itemName,
            qty: 1,
            expiry: new Date()
        });
        this.fridgeService.saveFridge(this.userEmail, this.data).then(function () {
            _this.refresh();
        });
        this.toggleAdd();
    };
    FridgeComponent.prototype.toggleAdd = function () {
        this.add = !this.add;
    };
    FridgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fridge',
            template: __webpack_require__("./src/app/fridge/fridge.component.html"),
            styles: [__webpack_require__("./src/app/fridge/fridge.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]])
    ], FridgeComponent);
    return FridgeComponent;
}());



/***/ }),

/***/ "./src/app/fridgeitem/fridgeitem.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.section-header{\r\n  margin: 0px;\r\n}\r\n\r\nlabel{\r\n  font-family: 'Libre Franklin', sans-serif;\r\n  font-size: 85%;\r\n}\r\n\r\n.page{\r\n  font-size: 85%;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n}\r\n\r\na{\r\n  padding-top:5px;\r\n  padding-bottom:5px;\r\n  padding-left: 2px;\r\n}\r\n\r\na:hover{\r\n  font-weight:bold;\r\n}\r\n\r\n.main{\r\n  margin: 0px;\r\n}\r\n\r\n.contents{\r\n  margin-bottom: 10px;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/fridgeitem/fridgeitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"section-header\">\n    <a (click)=\"collapseItem()\">{{ itemsrc.name }}</a>\n  </div>\n  <div class=\"main\">\n    <div class=\"contents\" *ngIf=\"!collapsed\">\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"form-row\">\n          <div class=\"col\" >\n            <label for=\"DaysLeft\" class=\"col-form-label-sm\">Days Left</label>\n            <input class=\"form-control form-control-sm\" id=\"DaysLeft\" value=\"6\" required>\n          </div>\n\n          <div class=\"col\">\n            <label for=\"ExpiryDate\" class=\"col-form-label-sm\">Expiry Date</label>\n            <input class=\"form-control form-control-sm\" id=\"ExpiryDate\" value=\"{{ getDateDisplay() }}\" required>\n          </div>\n\n          <div class=\"col\">\n            <label for=\"AmountLeft\" class=\"col-form-label-sm\">Amount Left</label>\n            <input class=\"form-control form-control-sm\" id=\"AmountLeft\" value=\"{{ getDisplayQty() }}\" required>\n          </div>\n        </div>\n        <br>\n        <select class=\"custom-select custom-select-sm\">\n          <option selected>Food</option>\n          <option value=\"1\">Drink</option>\n        </select>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fridgeitem/fridgeitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FridgeitemComponent; });
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

var FridgeitemComponent = /** @class */ (function () {
    function FridgeitemComponent() {
        this.collapsed = true;
    }
    FridgeitemComponent.prototype.ngOnInit = function () {
    };
    FridgeitemComponent.prototype.collapseItem = function () {
        this.collapsed = !this.collapsed;
    };
    FridgeitemComponent.prototype.getDisplayQty = function () {
        return this.itemsrc.qty.toString() + (this.itemsrc.unit ? " " + this.itemsrc.unit : "");
    };
    FridgeitemComponent.prototype.getDateDisplay = function () {
        return this.itemsrc.expiry;
    };
    FridgeitemComponent.prototype.getExpiryDate = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FridgeitemComponent.prototype, "itemsrc", void 0);
    FridgeitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fridgeitem',
            template: __webpack_require__("./src/app/fridgeitem/fridgeitem.component.html"),
            styles: [__webpack_require__("./src/app/fridgeitem/fridgeitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FridgeitemComponent);
    return FridgeitemComponent;
}());



/***/ }),

/***/ "./src/app/grocery-list/grocery-list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.large{\r\n  text-align: center;\r\n}\r\n.add{\r\n  text-align: center;\r\n}\r\n.usuals{\r\n  text-align: center;\r\n}\r\n.addhead{\r\n  margin-top: 2%;\r\n}\r\n.checks{\r\n  float: right;\r\n}\r\n.addbutton{\r\n  margin-top: 2%;\r\n  float: right;\r\n}\r\n.addfridge{\r\n  margin-top: 10%;\r\n}\r\n.translucent-list:hover{\r\n  opacity: 0.8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/grocery-list/grocery-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logged-header></app-logged-header>\n\n<div class=\"row\">\n  <div class=\"col-4 usuals\">\n    <h1>Saved Lists</h1>\n    <li class=\"list-group-item\"><h5>Previously made list templates</h5></li>\n    <ul class=\"list-group\" *ngFor=\"let item of appendableLists\">\n      <li class=\"list-group-item list-group-item-secondary\"><a [routerLink]=\"['/singlelist']\">{{ item.name }}</a>\n        <span><input type=\"checkbox\" class=\"checks\" (click)=\"checks[item._id] = !checks[item._id]\"></span>\n      </li>\n    </ul>\n\n    <a class=\"btn btn-primary btn- active addbutton\" role=\"button\" aria-pressed=\"true\" (click)=\"appendLists()\">Add to List</a>\n\n  </div>\n\n\n  <div class=\"col-7 large\">\n    <h1>Grocery List  <span><i class=\"fas fa-edit\"></i></span></h1>\n    <ul class=\"list-group translucent-list\" *ngFor=\"let item of shoppingList\">\n      <li class=\"list-group-item\">{{ item.name }}\n        <span><input type=\"checkbox\" class=\"checks\"></span>\n      </li>\n    </ul>\n\n\n    <button type=\"button\" (click)=\"toFridge()\" class=\"btn btn-primary btn-lg addfridge\">Add to Fridge</button>\n\n    <div class=\"col-1\"></div>\n  </div>\n\n\n\n\n</div>\n\n<!--<div class=\"set-head\">-->\n  <!--<div class=\"box\">-->\n\n    <!--<h1 class=\"sett\">Settings</h1>-->\n    <!--<div class=\"dropdown-divider\"></div>-->\n\n    <!--<h3>Update Details</h3>-->\n    <!--<div class=\"dropdown-divider\"></div> -->\n"

/***/ }),

/***/ "./src/app/grocery-list/grocery-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataretriever_service__ = __webpack_require__("./src/app/dataretriever.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroceryListComponent = /** @class */ (function () {
    function GroceryListComponent(ds) {
        this.userEmail = "john@john.com";
        this.checks = {};
        this.shoppingList = [];
        this.appendableLists = [];
        this.service = ds;
    }
    GroceryListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    GroceryListComponent.prototype.appendLists = function () {
        var _this = this;
        console.log(this.checks);
        var tempLists = this.appendableLists.filter(function (i) { return _this.checks[i._id]; });
        for (var _i = 0, tempLists_1 = tempLists; _i < tempLists_1.length; _i++) {
            var currentList = tempLists_1[_i];
            for (var _a = 0, _b = currentList.contents; _a < _b.length; _a++) {
                var shopItem = _b[_a];
                if (!this.shoppingList.map(function (thing) { return thing.name; }).includes(shopItem.name)) {
                    this.shoppingList.push(shopItem);
                }
            }
        }
        this.service.saveGroceries(this.userEmail, this.shoppingList).then(function () {
            _this.refresh();
        });
    };
    GroceryListComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getUserData(this.userEmail).then(function (data) {
            _this.shoppingList = data.groceries;
        });
        this.service.getListsForUser(this.userEmail).then(function (data) {
            _this.appendableLists = data;
            for (var _i = 0, _a = _this.appendableLists; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!_this.checks[item._id]) {
                    _this.checks[item._id] = false;
                }
            }
        });
    };
    GroceryListComponent.prototype.toFridge = function () {
        var _this = this;
        this.service.getUserData(this.userEmail).then(function (data) {
            return _this.service.saveFridge(_this.userEmail, data.fridge.concat(_this.shoppingList));
        }).then(function () {
            console.log("AYAYAYAYAYAY");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GroceryListComponent.prototype, "userEmail", void 0);
    GroceryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grocery-list',
            template: __webpack_require__("./src/app/grocery-list/grocery-list.component.html"),
            styles: [__webpack_require__("./src/app/grocery-list/grocery-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]])
    ], GroceryListComponent);
    return GroceryListComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 29% 42% 29%;\n      grid-template-columns: 29% 42% 29%;\n}\n\n.todd-header {\n  color: white;\n  background-color: #315030;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 1;\n  grid-column: 2/3;\n}\n\nh2{\n  /*text-align: right;*/\n  /*padding-right: 60px;*/\n}\n\n.header-link {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todd-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <h2>DueDate</h2>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.switchTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    HeaderComponent.prototype.switchPage = function (content) {
        this.switchTo.emit(content);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], HeaderComponent.prototype, "switchTo", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/item-list/item-list.component.css":
/***/ (function(module, exports) {

module.exports = ".list-header {\n  border-bottom: 1px solid black;\n}"

/***/ }),

/***/ "./src/app/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todd-list\">\n  <div class=\"list-header\">\n    <h2>Fridge</h2>\n  </div>\n  <div class=\"list-contents\">\n    <div *ngFor=\"let fooditem of foodlist\">\n      <food-item [height]=\"240\" [width]=\"240\" [food]=\"fooditem\" ></food-item>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
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

var ItemListComponent = /** @class */ (function () {
    function ItemListComponent() {
        this.foodlist = [
            {
                imgSrc: "http://lorempixel.com/240/120/",
                name: "Koala",
                expiry: new Date()
            },
            {
                imgSrc: "http://lorempixel.com/240/120/",
                name: "Panda",
                expiry: new Date()
            },
            {
                imgSrc: "http://lorempixel.com/240/120/",
                name: "Retardasi Mental",
                expiry: new Date()
            },
        ];
    }
    ItemListComponent.prototype.ngOnInit = function () {
    };
    ItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'food-list',
            template: __webpack_require__("./src/app/item-list/item-list.component.html"),
            styles: [__webpack_require__("./src/app/item-list/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.left-content{\r\n  text-align: left;\r\n  font-size: 100%;\r\n  color: green;\r\n}\r\n\r\n.login-box{\r\n  color: black;\r\n  padding: 0px;\r\n}\r\n\r\n.main{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 5% 60% 5% 25% 5%;\r\n      grid-template-columns: 5% 60% 5% 25% 5%;\r\n}\r\n\r\n.login{\r\n  -ms-grid-column: 4;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 4/5;\r\n  margin-top: 2px;\r\n  background: rgba(255,255,255,0.75);\r\n}\r\n\r\n.info{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n\r\n.section-header {\r\n  font-size: 1.6em;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid #cccccc;\r\n  font-family: 'Basic', sans-serif;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.section {\r\n  margin-top: 2px;\r\n  background: rgba(255,255,255,0.75);\r\n  border: 1px solid #2e3038;\r\n  padding-left: 15px;\r\n}\r\n\r\n.section-icon{\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<!--<<<<<<< Updated upstream-->\n<!--<div class=\"row\">-->\n  <!--<div class=\"col-2\">-->\n  <!--</div>-->\n  <!--<div class=\"col-8\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-8 left-content\">-->\n        <!--<h2>Experience new ways to shop groceries...</h2>-->\n        <!--<p>Insert food waste data here</p>-->\n        <!--<p>Lol don't you hate walls of text</p>-->\n       <!--</div>-->\n      <!--<div class=\"col-4 login-box\">-->\n        <!--<app-login (login)=\"navigateLogin()\"></app-login>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"col-2\">-->\n<!--=======-->\n<div class=\"main\">\n  <div class=\"info\">\n    <div class=\"section\">\n      <div class=\"section-header\" (click)=\"collapse(0)\"><i class=\"fas fa-briefcase section-icon\"></i>   About Us</div>\n      <div *ngIf=\"!collapsearr[0]\">\n        <p>We're trying to revolutionize the way you do your groceries, and\n          reduce problematic food waste. </p>\n        <p>Think about a world where there are less food wasted, and more food eaten. Think about a world\n          where you can save money because you remember to cook everything on your fridge.</p>\n      </div>\n    </div>\n    <div class=\"section\">\n      <div class=\"section-header\" (click)=\"collapse(1)\"><i class=\"fas fa-users section-icon\"></i>   The Team</div>\n      <div *ngIf=\"!collapsearr[1]\">\n        <p>Brought to you with <i class=\"fas fa-heartbeat\"></i> by team Titanic Overflow</p>\n        <ul *ngFor=\"let m of members\">\n          <li><a [href]=\"getGithubLink(m.github)\">{{ m.name }}</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"login\">\n    <!--<a>Revolutionizing {{ testvar }} grocery experience</a>-->\n\n    <app-login (login)=\"navigateLogin()\"></app-login>\n<!--&gt;>>>>>> Stashed changes-->\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(router, route) {
        this.collapsearr = [false, false];
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
        this.router = router;
        this.route = route;
        this.testvar = "AAAA";
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.navigateLogin = function () {
        this.testvar += "A";
        this.router.navigate(['/main']);
    };
    LandingComponent.prototype.collapse = function (menu) {
        this.collapsearr[menu] = !this.collapsearr[menu];
    };
    LandingComponent.prototype.getGithubLink = function (username) {
        return "http://github.com/" + username;
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/list-appender/list-appender.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-appender/list-appender.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- not used and obsolete -->"

/***/ }),

/***/ "./src/app/list-appender/list-appender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAppenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataretriever_service__ = __webpack_require__("./src/app/dataretriever.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListAppenderComponent = /** @class */ (function () {
    function ListAppenderComponent(ds) {
        this.service = ds;
    }
    ListAppenderComponent.prototype.ngOnInit = function () {
    };
    ListAppenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list-appender',
            template: __webpack_require__("./src/app/list-appender/list-appender.component.html"),
            styles: [__webpack_require__("./src/app/list-appender/list-appender.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]])
    ], ListAppenderComponent);
    return ListAppenderComponent;
}());



/***/ }),

/***/ "./src/app/list-page/list-page.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n}\r\n\r\n.list{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  background: rgba(255,255,255,0.75);\r\n  padding-left: 2px;\r\n  font-size: 85%;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\na{\r\n  cursor: pointer;\r\n}\r\n\r\n.list:hover{\r\n  background: rgba(255,255,255,0.5);\r\n}\r\n\r\n.title{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n\r\n.search{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  padding-top: 10px;\r\n  padding-right: 20px;\r\n}\r\n\r\nhr{\r\n  margin: 2px;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n\r\n.main2{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n  margin: 0px;\r\n}\r\n\r\n.listnames{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 50% 32% 18%;\r\n      grid-template-columns: 50% 32% 18%;\r\n  /*font-family: 'Work Sans', sans-serif;*/\r\n  font-family: 'Libre Franklin', sans-serif;\r\n}\r\n\r\n/*.addNewItem{*/\r\n\r\n/*margin-top:11px;*/\r\n\r\n/*grid-column: 2/3;*/\r\n\r\n/*text-align: right;*/\r\n\r\n/*font-size: 10px;*/\r\n\r\n/*margin-right: 0px;*/\r\n\r\n/*vertical-align: text-bottom;*/\r\n\r\n/*}*/\r\n\r\n/*li{*/\r\n\r\n/*font-family: 'Libre Franklin', sans-serif;*/\r\n\r\n/*}*/\r\n\r\n.addToGroceries{\r\n  margin-top:11px;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 3/4;\r\n  text-align: right;\r\n  font-size: 10px;\r\n  vertical-align: text-bottom;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.listheader{\r\n  margin-top: 5px;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n}\r\n\r\nul{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n}\r\n\r\nli{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n\r\napp-recipe{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  margin-top: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/list-page/list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logged-header></app-logged-header>\r\n\r\n<style>\r\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin');\r\n</style>\r\n\r\n<div class=\"main\">\r\n  <div class=\"title\">\r\n    <div class=\"listnames\">\r\n      <div class=\"listheader\">\r\n        {{list.name}} <a (click)=\"toggleAdd()\" class=\"click\"><i class=\"fas fa-edit section-icon\"></i></a>\r\n      </div>\r\n      <div class=\"addToGroceries\">\r\n        <a>+ADD TO GROCERIES</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"main\">\r\n  <hr>\r\n</div>\r\n\r\n<div class=\"main\">\r\n  <div class=\"search\">\r\n    <add-recipe (submit)=\"addItem($event)\" *ngIf=\"add\"></add-recipe>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main\">\r\n  <div class=\"list\" *ngFor=\"let item of list.contents\">\r\n    {{item.name}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/list-page/list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataretriever_service__ = __webpack_require__("./src/app/dataretriever.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPageComponent = /** @class */ (function () {
    function ListPageComponent(activatedRoute, service) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.list = {
            contents: [],
            name: "Loading...",
            url: "..."
        };
        this.userEmail = "john@john.com";
        this.collapsed = true;
        this.add = false;
    }
    ListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.listId = params['listid'];
            _this.refresh();
        });
    };
    ListPageComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getListWithId(this.listId).then(function (listItem) {
            _this.list = listItem;
        });
    };
    ListPageComponent.prototype.toggleAdd = function () {
        this.add = !this.add;
    };
    ListPageComponent.prototype.addItem = function (item) {
        this.list.contents.push({
            name: item,
            qty: 1
        });
        this.service.saveList(this.userEmail, this.list).then(function (result) {
        });
        this.toggleAdd();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ListPageComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ListPageComponent.prototype, "userEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ListPageComponent.prototype, "listId", void 0);
    ListPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-page',
            template: __webpack_require__("./src/app/list-page/list-page.component.html"),
            styles: [__webpack_require__("./src/app/list-page/list-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__dataretriever_service__["a" /* DataRetrieverService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__dataretriever_service__["a" /* DataRetrieverService */]])
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/listcontainer/listcontainer.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n.list{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  /*background-color: #fbf8f4;*/\r\n  padding: 10px;\r\n}\r\n\r\n.listnames{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 20% 60% 20%;\r\n      grid-template-columns: 20% 60% 20%;\r\n  /*font-family: 'Work Sans', sans-serif;*/\r\n  font-family: 'Libre Franklin', sans-serif;\r\n}\r\n\r\n.p{\r\n  text-align: center;\r\n}\r\n\r\n.listheader{\r\n  margin-top: 5px;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n}\r\n\r\n.viewall{\r\n  margin-top:11px;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 3/4;\r\n  text-align: right;\r\n  font-size: 10px;\r\n  vertical-align: text-bottom;\r\n  display: table;\r\n}\r\n\r\na{\r\n  color: black;\r\n}\r\n\r\np{\r\n  margin: 0px;\r\n}\r\n\r\n.listitems{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 25% 25% 25% 25%;\r\n      grid-template-columns: 25% 25% 25% 25%;\r\n  /*font-family: 'Taviraj', serif;*/\r\n  font-family: 'Libre Baskerville', serif;\r\n  font-size: 10px;\r\n}\r\n\r\nhr{\r\n  margin-top: 0.1em;\r\n  margin-bottom: 0.2em;\r\n  color: #2e3038;\r\n}\r\n\r\nimg{\r\n  max-width: 100%;\r\n  height: 200px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.list-base{\r\n  margin-right: 3px;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n  border: 1px solid #2e3038;\r\n  padding: 0px;\r\n  border-radius: 10px;\r\n  background-color: #fbf8f4;\r\n  text-align: center;\r\n  font-family: 'MuseoSans_500', serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/listcontainer/listcontainer.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin');\n</style>\n\n<div class=\"main\">\n  <div class=\"list\">\n    <div class=\"listnames\">\n      <div class=\"listheader\">\n        <a [href]=\"destination\">{{ title }}</a>\n      </div>\n      <div class=\"viewall\">\n        <div id=\"child\"><a [routerLink]=\"['/' + destination]\">VIEW ALL</a></div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"listitems\">\n      <div *ngFor=\"let item of lists\">\n        <app-listitem [listname]=\"item.name\"></app-listitem>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/listcontainer/listcontainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListcontainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListcontainerComponent = /** @class */ (function () {
    function ListcontainerComponent(router) {
        this.title = "";
        this.destination = "";
        this.datasource = [];
        this.lists = [
            "My Groceries",
            "Hangover Cure",
            "Cheetos Alternatives",
            "Wine"
        ];
        this.router = router;
    }
    ListcontainerComponent.prototype.ngOnInit = function () {
        if (this.datasource.length > 0) {
            this.lists = this.datasource;
        }
    };
    ListcontainerComponent.prototype.navigate = function () {
        this.router.navigate(["/" + this.destination]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ListcontainerComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ListcontainerComponent.prototype, "destination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ListcontainerComponent.prototype, "datasource", void 0);
    ListcontainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listcontainer',
            template: __webpack_require__("./src/app/listcontainer/listcontainer.component.html"),
            styles: [__webpack_require__("./src/app/listcontainer/listcontainer.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListcontainerComponent);
    return ListcontainerComponent;
}());



/***/ }),

/***/ "./src/app/listitem/listitem.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n}\r\n\r\n.list{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  padding: 10px;\r\n}\r\n\r\n.listnames{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 10% 70% 20%;\r\n      grid-template-columns: 10% 70% 20%;\r\n  /*font-family: 'Work Sans', sans-serif;*/\r\n  font-family: 'Libre Franklin', sans-serif;\r\n}\r\n\r\n.p{\r\n  text-align: center;\r\n}\r\n\r\n.listheader{\r\n  margin-top: 5px;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n}\r\n\r\n.viewall{\r\n  margin-top:11px;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 3/4;\r\n  text-align: right;\r\n  font-size: 10px;\r\n  vertical-align: text-bottom;\r\n  display: table;\r\n}\r\n\r\na{\r\n  color: black;\r\n}\r\n\r\np{\r\n  margin: 0px;\r\n}\r\n\r\n.listitems{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 25% 25% 25% 25%;\r\n      grid-template-columns: 25% 25% 25% 25%;\r\n  /*font-family: 'Taviraj', serif;*/\r\n  font-family: 'Libre Baskerville', serif;\r\n  font-size: 10px;\r\n}\r\n\r\nhr{\r\n  margin-top: 0.1em;\r\n  margin-bottom: 0.2em;\r\n  color: #2e3038;\r\n}\r\n\r\nimg{\r\n  max-width: 100%;\r\n  height: 200px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.list-base{\r\n  margin-right: 3px;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n  border: 1px solid #2e3038;\r\n  padding: 0px;\r\n  border-radius: 10px;\r\n  font-family: 'Libre Baskerville', serif;\r\n  background-color: #fbf8f4;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/listitem/listitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-base\">\n  <div class=\"grocerymodule\">\n    <a href=\"\">\n      <img class=\"img\" src=\"assets/grocery.jpg\">\n    </a>\n  </div>\n  <hr>\n  <p>{{ listname }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/listitem/listitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListitemComponent = /** @class */ (function () {
    function ListitemComponent(router) {
        this.router = router;
    }
    ListitemComponent.prototype.ngOnInit = function () {
    };
    ListitemComponent.prototype.navigate = function () {
        this.router.navigate(["/" + this.destination]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ListitemComponent.prototype, "listname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ListitemComponent.prototype, "destination", void 0);
    ListitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listitem',
            template: __webpack_require__("./src/app/listitem/listitem.component.html"),
            styles: [__webpack_require__("./src/app/listitem/listitem.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListitemComponent);
    return ListitemComponent;
}());



/***/ }),

/***/ "./src/app/logged-header/logged-header.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n}\r\n\r\n.logged-header {\r\n  color: white;\r\n  background-color: #315030;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n\r\n.user{\r\n  margin-top: 10px;\r\n  font-size: 100%;\r\n}\r\n\r\n.dropdown{\r\n  margin-top: 5px;\r\n  background-color: #31503;\r\n}\r\n\r\n.header-link {\r\n  cursor: pointer;\r\n}\r\n\r\n.usericon{\r\n  color: black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nh2 > a{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/logged-header/logged-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logged-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <h2><a [routerLink]=\"['/main']\">DueDate</a></h2>\n      </div>\n      <div class=\"col-lg-4\">\n        <!-- INTENTIONALLY EMPTY -->\n      </div>\n      <div class=\"col-lg-2 user\">\n        <p><i class=\"fas fa-user-circle usericon\"></i>  Welcome John Doe </p>\n      </div>\n\n      <!--<p class=\"header-link\" (click)=\"switchPage('team')\">The Team</p>-->\n      <div class=\"col-lg-2 dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Options\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/fridge']\">What's in my fridge?</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/groceries']\">Add Groceries</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/lists']\">My Lists</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/settings']\">Settings</a>\n\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/home']\">Log Out</a>\n\n        </div>\n      </div>\n\n\n      </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/logged-header/logged-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedHeaderComponent; });
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

var LoggedHeaderComponent = /** @class */ (function () {
    function LoggedHeaderComponent() {
    }
    LoggedHeaderComponent.prototype.ngOnInit = function () {
    };
    LoggedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logged-header',
            template: __webpack_require__("./src/app/logged-header/logged-header.component.html"),
            styles: [__webpack_require__("./src/app/logged-header/logged-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoggedHeaderComponent);
    return LoggedHeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/*.body{*/\r\n  /*display: grid;*/\r\n  /*grid-template-columns: 29% 42% 29%;*/\r\n  /*grid-template-rows: 2fr 8fr;*/\r\n  /*}*/\r\n  .login{\r\n  /*grid-column: 2/3;*/\r\n  /*grid-row: 2/3;*/\r\n  border: 1px solid;\r\n  padding: 9.5%;\r\n}\r\n  .buttons{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 25% 50% 25%;\r\n      grid-template-columns: 25% 50% 25%;\r\n}\r\n  button{\r\n  text-align: center;\r\n}\r\n  .loginbutton{\r\n  grid-column: 0/1;\r\n}\r\n  .signupbutton{\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 3/4;\r\n  padding-left: 7%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"login\">\n    <h2>Hello!</h2>\n    <p>{{ this.message }}</p>\n    <form>\n      <div class=\"form-group\" *ngIf=\"signupmode\">\n        <label for=\"exampleInputEmail1\">First Name</label>\n        <input class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"\" [(ngModel)]=\"formData.firstName\" name=\"firstName\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"signupmode\">\n        <label for=\"exampleInputEmail1\">Last Name</label>\n        <input class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"\" [(ngModel)]=\"formData.lastName\" name=\"lastName\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"hello@example.com\" [(ngModel)]=\"formData.email\" name=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" [(ngModel)]=\"formData.passwd\" name=\"passwd\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"signupmode\">\n        <label for=\"exampleInputPassword1\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" [(ngModel)]=\"formData.confPasswd\" name=\"confPasswd\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"signupmode\">\n        <label for=\"exampleInputPassword1\">Enter Location</label>\n        <input class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" [(ngModel)]=\"formData.location\" name=\"location\">\n      </div>\n      <div class=\"buttons\">\n        <button (click)=\"goLogin()\" type=\"button\" class=\"btn btn-primary loginbutton\">Log-In</button>\n        <button (click)=\"switchSignup()\" type=\"button\" class=\"btn btn-primary signupbutton\" *ngIf=\"!signupmode\">Sign-Up</button>\n        <button (click)=\"goSignup()\" type=\"button\" class=\"btn btn-primary signupbutton\" *ngIf=\"signupmode\">Sign-Up</button>\n      </div>\n    </form>\n  </div>\n </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(service) {
        this.message = "Log in here.";
        this.formData = {
            firstName: "",
            lastName: "",
            email: "",
            passwd: "",
            confPasswd: "",
            location: ""
        };
        this.login = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.signup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.signupmode = false;
        this.auth = service;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goLogin = function () {
        if (this.signupmode) {
            this.signupmode = false;
        }
        else {
            this.login.emit({
                email: this.formData.email,
                password: this.formData.passwd
            });
        }
    };
    LoginComponent.prototype.switchSignup = function () {
        this.signupmode = true;
    };
    LoginComponent.prototype.goSignup = function () {
        var _this = this;
        if (this.formData.passwd === this.formData.confPasswd) {
            var newUser = {
                firstName: this.formData.firstName,
                lastName: this.formData.lastName,
                email: this.formData.email,
                password: this.formData.passwd,
                locationId: this.formData.location
            };
            this.auth.signUp(newUser).then(function (result) {
                _this.signup.emit({
                    success: true,
                    user: result
                });
                _this.message = "Sign up successful for user " + result.email;
            }, function (error) {
                _this.message = error;
            });
        }
        else {
            this.message = "Password does not match";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LoginComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LoginComponent.prototype, "signup", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logged-header></app-logged-header>\n\n<div class=\"container-fluid bod\">\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6 content1\">\n          <app-listcontainer [title]=\"'FRIDGE'\" [destination]=\"'fridge'\" [datasource]=\"fridge\"></app-listcontainer>\n          <app-listcontainer [title]=\"'MY LISTS'\" [destination]=\"'lists'\" [datasource]=\"lists\"></app-listcontainer>\n    </div>\n    <div class=\"col-lg-3\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataretriever_service__ = __webpack_require__("./src/app/dataretriever.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(dr) {
        this.fridge = [];
        this.lists = [];
        this.dataretriver = dr;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        this.fridge = this.dataretriver.getFridge();
        this.lists = this.dataretriver.getLists();
    };
    MainpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__("./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__("./src/app/mainpage/mainpage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataretriever_service__["a" /* DataRetrieverService */]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 20% auto;\r\n      grid-template-columns: 20% auto;\r\n  border: 1px solid #2e3038;\r\n  border-radius: 10px;\r\n}\r\n\r\nh1{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n  font-size: 1.6em;\r\n  margin-top: 20px;\r\n  font-family: 'Libre Franklin', sans-serif;\r\n  margin-left: 5px;\r\n}\r\n\r\na{\r\n  color: black;\r\n}\r\n\r\nimg{\r\n  height: 150px;\r\n  max-width: 100%;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n  border-top-left-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n  border-right: 1px solid #2e3038;\r\n}\r\n\r\np{\r\n  padding-left: 8px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin');\r\n</style>\r\n\r\n<div class=\"main\">\r\n  <a [routerLink]=\"['/singlelist']\">\r\n    <img class=\"img\" src=\"assets/list.jpg\">\r\n  </a>\r\n  <div class=\"caption\">\r\n    <h1><a [routerLink]=\"['/lists/' + data._id]\">{{ data.name }}</a></h1>\r\n    <p>{{ getDisplayedContents() }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeComponent; });
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

var RecipeComponent = /** @class */ (function () {
    function RecipeComponent() {
    }
    RecipeComponent.prototype.ngOnInit = function () {
    };
    RecipeComponent.prototype.getDisplayedContents = function () {
        var contents = "Includes ";
        if (this.data.contents.length == 0) {
            return "";
        }
        for (var i = 0; i < 3; ++i) {
            if (this.data.contents.length <= i) {
                contents += ".";
                break;
            }
            if (i > 0) {
                contents += ", ";
            }
            contents += this.data.contents[i].name + (i === 2 ? "." : "");
        }
        return contents;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RecipeComponent.prototype, "data", void 0);
    RecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe',
            template: __webpack_require__("./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__("./src/app/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ".set-head{\r\n  margin-top: 1%;\r\n\r\n  display: -ms-grid;\r\n\r\n  display: grid;\r\n  -ms-grid-columns: 29% 42% 29%;\r\n      grid-template-columns: 29% 42% 29%;\r\n}\r\n.sett{\r\n  text-align: center;\r\n}\r\n.settings{\r\n  -ms-grid-columns: auto 90% auto;\r\n      grid-template-columns: auto 90% auto;\r\n}\r\nform{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n.box{\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 2/3;\r\n}\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logged-header></app-logged-header>\n\n<div class=\"set-head\">\n  <div class=\"box\">\n\n    <h1 class=\"sett\">Settings</h1>\n    <div class=\"dropdown-divider\"></div>\n\n    <h3>Update Details</h3>\n    <div class=\"dropdown-divider\"></div>\n    <div class=\"settings\">\n      <form>\n        <div class=\"form-row\">\n            <label for=\"inputEmail4\">Enter Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n\n        </div>\n        <div class=\"form-row\">\n\n            <label for=\"inputPassword4\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n\n\n\n        <div class=\"form-group\">\n          <label for=\"contact\">Contact Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"contact\" placeholder=\"+61 123 456 789\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress2\">Address 2</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputCity\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputState\">State</label>\n            <select id=\"inputState\" class=\"form-control\">\n              <option selected>Choose...</option>\n              <option>...</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputZip\">Zip</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Apply Changes</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/soon/soon.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n  text-align: center;\r\n  font-family: 'Basic', sans-serif;\r\n  margin-bottom: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.page-header > h1 {\r\n  font-size: 280%;\r\n  font-weight: 600;\r\n}\r\n\r\n.section-header:hover {\r\n  border-bottom: 2px solid #00448f;\r\n}\r\n\r\n.page-content {\r\n  background: rgba(255,255,255,0.85);\r\n  font-family: 'MuseoSans_500', serif;\r\n}\r\n\r\n.page-content > .row {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n}\r\n\r\n.page-tagline {\r\n\r\n}\r\n\r\n.page-tagline > div {\r\n  font-size: 1.2em;\r\n  height: 2.4em;\r\n}\r\n\r\n.section-header {\r\n  font-size: 1.6em;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid #cccccc;\r\n  font-family: 'Basic', sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.section-icon {\r\n  margin-right: 10px;\r\n}\r\n\r\na {\r\n  font-weight: 600;\r\n  color: black;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  border-bottom: 3px solid #00448f;\r\n}\r\n\r\n.section {\r\n  margin-top: 2px;\r\n}\r\n\r\n.section > p {\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/soon/soon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top-level\">\n  <div class=\"row\">\n    <div class=\"col-3\">\n\n    </div>\n    <div class=\"col-6 page-content\">\n      <div class=\"page-header\">\n        <h1>DueDate</h1>\n        <div class=\"page-tagline\">\n          <div>{{ taglines[taglineIndex] }}{{ dots }}</div>\n        </div>\n      </div>\n      <div class=\"row\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"section\">\n            <div class=\"section-header\" (click)=\"collapse(0)\"><i class=\"fas fa-briefcase section-icon\"></i>What's Going On?</div>\n              <div *ngIf=\"!collapsearr[0]\">\n                <p>We're trying to revolutionize the way you do your groceries, and\n                  reduce problematic food waste. </p>\n                <p>Think about a world where there are less food wasted, and more food eaten. Think about a world\n                  where you can save money because you remember to cook everything on your fridge.</p>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"section\">\n            <div class=\"section-header\" (click)=\"collapse(1)\"><i class=\"fas fa-users section-icon\"></i>The Team</div>\n              <div *ngIf=\"!collapsearr[1]\">\n                <p>Brought to you with <i class=\"fas fa-heartbeat\"></i> by team Titanic Overflow</p>\n                <ul *ngFor=\"let m of members\">\n                  <li><a [href]=\"getGithubLink(m.github)\">{{ m.name }}</a></li>\n                </ul>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n    </div>\n  </div>\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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