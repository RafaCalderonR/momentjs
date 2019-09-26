import {calculateDifference} from '../src/service/momentService';

var now  = "04/09/2013 15:00:00";
var now2  = "04/09/2013 15:00:00";
var then = "04/09/2014 14:20:30";

describe('should come true', () => {
    test('false', () => {
        expect(calculateDifference(now,now2)).toBeTruthy();
    });
});

describe('should come false', () => {
    test('false', () => {
        expect(calculateDifference(now, then)).toBeFalsy();
    });
});
