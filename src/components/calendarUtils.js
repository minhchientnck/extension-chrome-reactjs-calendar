export const SUN_COLOR = '#ff7979';
export const SAT_COLOR = '#0872ff';
export const CURR_BG_COLOR = '#f6e91e';
export const DEFAULT_COLOR = '#000';
export const NONE_FILL = 'none';

/**
 * get dates of month
 * @param {*} month
 * @param {*} year
 */
export const getDatesOfMonth = (month, year) => {
  var currentDate = new Date();
  var currentMonth = month;
  var currentYear = year;
  currentDate.setDate(1);
  currentDate.setMonth(currentMonth);
  currentDate.setFullYear(currentYear);
  // dates of before month
  var cellDate = new Date(currentDate);
  var startedDayOfMonth = currentDate.getDay();
  var datesOfBeforeMonth = [];
  for (var i = 0; i < startedDayOfMonth; i++) {
    cellDate.setHours(-24);
    datesOfBeforeMonth.push(new Date(cellDate));
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
      cellDate = new Date(currentDate);
      cellDate.setDate(count);
      if (cellDate.getMonth() === currentMonth) {
        datesOfMonth.push(new Date(cellDate));
      }
    }
    row = k * (j + 1);
  }
  datesOfMonth = datesOfBeforeMonth.concat(datesOfMonth);
  // dates of next month
  var datesOfNextMonth = [];
  var nextMonth = currentMonth + 1;
  cellDate = new Date(currentDate);
  for (var h = 0; h < (42 - datesOfMonth.length); h++) {
    cellDate.setMonth(nextMonth);
    cellDate.setDate(h + 1);
    datesOfNextMonth.push(new Date(cellDate));
  }
  datesOfMonth = datesOfMonth.concat(datesOfNextMonth);
  return datesOfMonth;
};

/**
 * get style current date
 * @param {*} date 
 */
export const getStyleCurrentDate = (date) => {
  var currentDate = new Date();
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
export const getStyleTextDate = (date, currentMonth) => {
  var textColor = DEFAULT_COLOR;
  var opacity = 1;
  if (date.getDay() === 0) {
    textColor = SUN_COLOR;
  } else if (date.getDay() === 6) {
    textColor = SAT_COLOR;
  }
  if (date.getMonth() !== currentMonth) {
    textColor = DEFAULT_COLOR;
    opacity = 0.5;
  }
  return {
    textColor,
    opacity,
  }
};
