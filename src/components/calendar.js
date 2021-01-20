import React, { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import {
  getDatesOfMonth,
  getStyleCurrentDate,
  getStyleTextDate,
  SUN_COLOR,
  SAT_COLOR,
} from './calendarUtils';
import './style.css';

const Cell = props => (<svg
  x={props.x}
  y={props.y}
  width={props.width}
  height={props.height}>
  <rect
    x="0" y="0"
    width={props.width}
    height={props.height}
    stroke="#dfdfdf"
    strokeWidth="1"
    fill={props.rectFill}
  />
  <text x="50%" y="50%"
    opacity={props.opacity}
    fill={props.textColor}
    fontWeight="600"
    alignmentBaseline="middle"
    textAnchor="middle"
    fontSize="4"
  >
    {props.text}
  </text>
</svg>);

Cell.propsType = {
  x: PropsType.number.isRequired,
  y: PropsType.number.isRequired,
  width: PropsType.number.isRequired,
  height: PropsType.number.isRequired,
  rectFill: PropsType.string.isRequired,
  textColor: PropsType.string.isRequired,
  opacity: PropsType.string.isRequired,
};

Cell.defaultProps = {
  width: 15,
  height: 8,
  rectFill: 'none',
  textColor: '#000',
  opacity: 1,
};

/**
 * get calendar
 * @param {*} month 
 * @param {*} year 
 */
export const getCalendar = (month, year) => {
  var datesOfMonth = getDatesOfMonth(month, year);
  var datesOfCalendar = [];
  var weekOfCalendar = [];
  var i = 0;
  var j = 0;
  var row = 0;
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 7; j++) {
      var index = j + row;
      var date = datesOfMonth[index];
      var cell = (<Cell
        key={i + j}
        x={j * 15}
        y={(i + 1) * 8}
        textColor={getStyleTextDate(date, month).textColor}
        opacity={getStyleTextDate(date, month).opacity}
        rectFill={getStyleCurrentDate(date)}
        text={date.getDate()}
      />);
      weekOfCalendar.push(cell);
    }
    datesOfCalendar.push(weekOfCalendar);
    weekOfCalendar = [];
    row = j * (i + 1);
  }
  return datesOfCalendar;
};

const MM_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = props => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] =  useState(currentDate.getFullYear());
  const calendar = getCalendar(month, year);

  const onReset = () => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  };

  const onNext = () => {
    let tmonth = month;
    let tyear = year;
    tmonth++;
    if (tmonth > 11) {
      tmonth = tmonth % 12;
      tyear++;
      setYear(tyear);
    }
    setMonth(tmonth);
  };

  const onPrev = () => {
    let tmonth = month;
    let tyear = year;
    tmonth--;
    if (tmonth < 0) {
      tmonth = 11;
      tyear--;
      setYear(tyear);
    }
    setMonth(tmonth);
  };

  return (<div className="container">
    <svg
      viewBox="-2 -12 109 70"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <foreignObject x="0" y="-10" width="8" height="8">
        <button className="icon prev" onClick={onPrev}>
          <svg x="0" y="-10" width="8" height="8" aria-hidden="true"
            focusable="false"
            role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="#dfdfdf" d="M256 504C119 504 8 393
              8 256S119 8 256 8s248 111 248 248-111 248-248
              248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7
              24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3
              9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7
              239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4
              33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path>
          </svg>
        </button>
      </foreignObject>
      <foreignObject x="97" y="-10" width="8" height="8">
        <button className="icon next" onClick={onNext}>
          <svg x="97" y="-10" width="8" height="8" aria-hidden="true"
            focusable="false"
            role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="#dfdfdf" d="M256 8c137 0 248 111 248 248S393 504 256
            504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3
            0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7
            9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3
            273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9
            0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
          </svg>
        </button>
      </foreignObject>
      <svg onClick={onReset} cursor="pointer" x="12" y="-10" width="80" height="10">
        <rect x="0" y="0"
          width="80" height="10" stroke="red"
          strokeWidth="0" fill="white"
        />
        <text
          x="50%"
          y="50%" 
          fontSize="5"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {MM_MONTHS[month]} - {year}
        </text>    
      </svg>
      <g>
        <Cell x="00" y="00" height="08" rectFill="#eee" textColor={SUN_COLOR} text="Sun" />
        <Cell x="15" y="00" height="08" rectFill="#eee" text="Mon" />
        <Cell x="30" y="00" height="08" rectFill="#eee" text="Tue" />
        <Cell x="45" y="00" height="08" rectFill="#eee" text="Wed" />
        <Cell x="60" y="00" height="08" rectFill="#eee" text="Thu" />
        <Cell x="75" y="00" height="08" rectFill="#eee" text="Fri" />
        <Cell x="90" y="00" height="08" rectFill="#eee" textColor={SAT_COLOR} text="Sat" />
      </g>
      {calendar.map(week => week.map(day => day))}
    </svg>
  </div>);
};

Calendar.propsType = {
  width: PropsType.number.isRequired,
  strokeWidth: PropsType.number.isRequired,
  color: PropsType.string.isRequired,
};

Calendar.defaultProps = {
  width: 200,
  color: '#000',
  strokeWidth: .025,
};

export default Calendar;