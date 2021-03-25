import XDate from '../../XDate';

export const SUN_COLOR = '#ff7979';
export const SAT_COLOR = '#0872ff';
export const CURR_BG_COLOR = '#f6e91e';
export const DEFAULT_COLOR = '#000';
export const NONE_FILL = 'none';

export const MONTH_NAMES = [
  'Tháng 1', 'Tháng 2', 
  'Tháng 3', 'Tháng 4',
  'Tháng 5', 'Tháng 6',
  'Tháng 7', 'Tháng 8',
  'Tháng 9', 'Tháng 10', 
  'Tháng 11', 'Tháng 12',
];

/**
 * get dates of month
 * @param {*} month
 * @param {*} year
 */
export function getDatesOfMonth(month, year){
  var currentDate = new XDate();
  var currentMonth = month;
  var currentYear = year;
  currentDate.setDate(1);
  currentDate.setMonth(currentMonth);
  currentDate.setFullYear(currentYear);
  // dates of before month
  var cellDate = new XDate(currentDate);
  var startedDayOfMonth = currentDate.getXDay();
  var datesOfBeforeMonth = [];
  for (var i = 0; i < startedDayOfMonth; i++) {
    cellDate.setHours(-24);
    datesOfBeforeMonth.push(new XDate(cellDate));
  }
  datesOfBeforeMonth = datesOfBeforeMonth.reverse();
  // dates of current month
  var datesOfMonth = [];
  var j = 0;
  var k = 0;
  var row = 0;
  for (j = 0; j < 6; j++) {
    for (k = 0; k < 7; k++) {
      var count = k + 1 + row;
      cellDate = new XDate(currentDate);
      cellDate.setDate(count);
      if (cellDate.getMonth() === currentMonth) {
        datesOfMonth.push(new XDate(cellDate));
      }
    }
    row = k * (j + 1);
  }
  datesOfMonth = [...datesOfBeforeMonth, ...datesOfMonth];
  // dates of next month
  var datesOfNextMonth = [];
  var nextMonth = currentMonth + 1;
  cellDate = new XDate(currentDate);
  for (var h = 0; h < (42 - datesOfMonth.length); h++) {
    cellDate.setMonth(nextMonth);
    cellDate.setDate(h + 1);
    datesOfNextMonth.push(new XDate(cellDate));
  }
  datesOfMonth = [...datesOfMonth, ...datesOfNextMonth];
  return datesOfMonth;
};

/**
 * get style current date
 * @param {*} date 
 */
export function getStyleCurrentDate(date){
  var currentDate = new XDate();
  if (currentDate.getDate() === date.getDate() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getFullYear() === date.getFullYear()) {
    return CURR_BG_COLOR;
  }
  return NONE_FILL;
};

/**
 * get style text date
 * @param {*} date 
 * @param {*} currentMonth 
 */
export function getStyleTextDate(date, currentMonth){
  var textColor = DEFAULT_COLOR;
  var opacity = 1;
  if (date.getXDay() === 0) {
    textColor = SUN_COLOR;
  } else if (date.getXDay() === 6) {
    textColor = SAT_COLOR;
  }
  if (date.getMonth() !== currentMonth) {
    textColor = DEFAULT_COLOR;
    opacity = 0.5;
  }
  return { textColor, opacity };
};
