import moment from 'moment';
import { monkingData } from '../data/employees';
import {
	calculateDifferenceDays,
	updateDataEmployee,
	addTimeToDate,
} from '../service/momentService';

const diffDates = (date: string, date2: string): boolean =>
	calculateDifferenceDays(date, date2);

const sumDates = (date: moment.Moment, untimes: Object) =>
	addTimeToDate(date, untimes);

const setDateEmployee = (name: string) => updateDataEmployee(name);

const SunDiffDate = () => {};

export {
	diffDates,
	//sumDates,
	setDateEmployee,
	SunDiffDate,
};
