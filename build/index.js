"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const momentService_1 = require("./service/momentService");
const now = "04/09/2013 15:00:00";
const then = "04/09/2014 14:20:30";
const sumPru = ["2d"];
const a = moment_1.default('2016-01-01');
const diffDates = (date, date2) => momentService_1.calculateDifferenceDays(date, date2);
//const sumDates = (date:moment.Moment, untimes: Array<string>)=> addTimeToDate(date, untimes);
const setDateEmployee = (name) => momentService_1.updateDataEmployee(name);
const aaa = diffDates(now, then);
console.log(aaa);
//const sumDiffDate():string => 
//const rafa =diffDates(now,then);
//const mierda = sumDates(a, sumPru)
