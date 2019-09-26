"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
var now = "04/09/2013 15:00:00";
var then = "04/09/2014 14:20:30";
function calculateDifference(date1, date2) {
    const differenceDays = moment_1.default.duration(moment_1.default('2016-02-01').diff(moment_1.default('2016-03-01'))).asDays();
    return differentOrEqual(differenceDays);
}
function differentOrEqual(differenceDays) {
    console.log(differenceDays === 0);
}
calculateDifference(now, then);
