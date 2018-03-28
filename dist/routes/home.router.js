"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
/** write your router configuration here */
router.get("/", function (req, res) {
    res.send("Hello");
});
/** exports the router */
exports.default = router;
