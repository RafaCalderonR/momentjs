"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const constant_1 = require("../data/constant");
const employees_1 = require("../data/employees");
const utils_1 = require("../utils/utils");
const all = [];
const allDistances = new Set();
const calculateDifferenceDays = (date1, date2) => differentOrEqual(daysOfDiference(date1, date2));
exports.calculateDifferenceDays = calculateDifferenceDays;
const daysOfDiference = (date1, date2) => moment_1.default
    .duration(moment_1.default(stringToMoment(date1)).diff(moment_1.default(stringToMoment(date2))))
    .asDays();
const differentOrEqual = (differenceDays) => differenceDays === 0;
const stringToMoment = (data) => moment_1.default(data, constant_1.DATEFORMAT.FORMAT);
const todayDate = () => moment_1.default().format(constant_1.DATEFORMAT.FORMAT);
const addTimeToDate = (date, untimes) => {
    date.add(untimes);
};
exports.addTimeToDate = addTimeToDate;
//const findEmployeeByName = (name:string) => monkingData.filter((employee) => employee.name == name );
const updateDataEmployee = (nameEmployee) => employees_1.monkingData.map(name => name.name == nameEmployee ? (name.updated_at = todayDate()) : utils_1.error());
exports.updateDataEmployee = updateDataEmployee;
const turnAllinMoment = () => employees_1.monkingData.map(date => all.push(stringToMoment(date.date)));
exports.turnAllinMoment = turnAllinMoment;
const compareAllMoment = () => {
    all.map(date => all.map(dateToDiff => {
        if (JSON.stringify(date) !== JSON.stringify(dateToDiff))
            allDistances.add(Math.abs(calculateDifferenceMoment(date, dateToDiff)));
    }));
};
const calculateDifferenceMoment = (date1, date2) => date1.diff(date2, 'days');
const eeee = () => allDistances.reduce((acc, curr) => acc + curr);
turnAllinMoment();
compareAllMoment();
console.log(eeee());
//console.log(allDistances);
//console.log(calculateDifferenceMoment(a, b));
