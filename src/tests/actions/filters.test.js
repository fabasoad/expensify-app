import moment from 'moment';
import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const expectedStartDate = moment(0);
    const action = setStartDate(expectedStartDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: expectedStartDate
    });
});

test('should generate set end date action object', () => {
    const expectedEndDate = moment(0);
    const action = setEndDate(expectedEndDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: expectedEndDate
    });
});

test('should generate set text filter with provided values', () => {
    const text = '123abc';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});