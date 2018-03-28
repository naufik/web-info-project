"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SoonComponent = /** @class */ (function () {
    function SoonComponent() {
        this.dots = "";
        this.displayMembers = false;
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
            "Acummulating bonus points",
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
            "Resolving merge conflicts in package-lock.json"
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
    SoonComponent = __decorate([
        core_1.Component({
            selector: 'soon',
            templateUrl: './soon.component.html',
            styleUrls: ['./soon.component.css']
        })
    ], SoonComponent);
    return SoonComponent;
}());
exports.SoonComponent = SoonComponent;
