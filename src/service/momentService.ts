import moment, { Moment } from 'moment';
import { DATEFORMAT } from '../data/constant';
import { monkingData } from '../data/employees';
import { error } from '../utils/utils';

const allMoments: Array<moment.Moment> = [];
const allDistances = new Set();

const calculateDifferenceDays = (date1: string, date2: string) =>
	differentOrEqual(daysOfDiference(date1, date2));

const daysOfDiference = (date1: string, date2: string): number =>
	moment
		.duration(moment(stringToMoment(date1)).diff(moment(stringToMoment(date2))))
		.asDays();

const differentOrEqual = (differenceDays: number): boolean =>
	differenceDays === 0;

const stringToMoment = (data: string): moment.Moment =>
	moment(data, DATEFORMAT.FORMAT);

const todayDate = () => moment().format(DATEFORMAT.FORMAT);

const addTimeToDate = (date: moment.Moment, untimes: Object) => {
	date.add(untimes);
};

//const findEmployeeByName = (name:string) => monkingData.filter((employee) => employee.name == name );

const updateDataEmployee = (nameEmployee: string) =>
	monkingData.map(name =>
		name.name == nameEmployee ? (name.updated_at = todayDate()) : error()
	);

const turnAllinMoment = () =>
	monkingData.map(date => all.push(stringToMoment(date.date)));

const compareAllMoment = () => {
	

	allMoments.map(date =>
		allMoments.map(dateToDiff => {
			if (JSON.stringify(date) !== JSON.stringify(dateToDiff)) 
				allDistances.add(Math.abs(calculateDifferenceMoment(date, dateToDiff)))
			 
		})
	);

};



const calculateDifferenceMoment = (date1: moment, date2: moment) => date1.diff(date2, 'days');



export {
	calculateDifferenceDays,
	updateDataEmployee,
	turnAllinMoment,
	//compareAllMoment,
	addTimeToDate,
};

turnAllinMoment();
compareAllMoment();

