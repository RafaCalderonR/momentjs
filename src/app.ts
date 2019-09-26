import {diffDates, setDateEmployee} from './controller/controller'
import {monkingData} from './data/employees'



const untimes= {"year" : 5}

const now  = "04/09/2013 15:00:00";
const then = "04/09/2014 14:20:30";
const sumPru= ["2d"];
const name = 'Maria'
//const a = moment('2016-01-01'); 

//console.log(diffDates(now, then));
setDateEmployee('Maria');
console.log(monkingData);