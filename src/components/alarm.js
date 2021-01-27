import React, { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import './styles.css';

const Alarm = (props) => {
  const [date, setDate] = useState(new Date());
  const [second, setSecond] = useState(new Date().getSeconds());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      setSecond(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 100);
  }, []);

  const hourDeg = (hour * 30 + minute * 0.5) % 360;
  const minuteDeg = (minute * 6 + second * 0.1) % 360;
  const secondDeg = (second * 6) % 360;
  return (
    <div className="container" style={{
      width: `${props.width}px`,
      height: 'auto',
      marginTop: '43px',
    }}>
      <svg viewBox="-1 -1 102 130" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="50" cy="50" r="50" fill="none" stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <polygon
          points="50,50 47,40 50,22 53,40"
          fill="#ff0303"
          stroke="#ff0303"
          strokeWidth={`${props.strokeWidth}`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${hourDeg} 50 50;${hourDeg} 50 50`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <polygon
          points="50,50 47,40 50,12 53,40"
          fill="#0b0f93"
          stroke="#0b0f93"
          strokeWidth={`${props.strokeWidth}`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${minuteDeg} 50 50;${minuteDeg} 50 50`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <polygon
          points="50,50 49,50 49,8 51,8 51,50"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${secondDeg} 50 50;${secondDeg} 50 50`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <circle cx="50" cy="50" r="2.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="50" cy="5" r="2.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="54.703780847044406" cy="5.2465147084277035" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="59.35602608679917" cy="5.983357966978744" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="63.905764746872634" cy="7.202456766718093" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="68.303148938411" cy="8.89045440608296" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="72.5" cy="11.02885682970026" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="76.45033635316129" cy="13.594235253127366" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="80.11087728614862" cy="16.558482853517262" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="83.44151714648274" cy="19.88912271385138" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="86.40576474687263" cy="23.54966364683871" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="88.97114317029974" cy="27.499999999999996" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="91.10954559391703" cy="31.69685106158899" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="92.79754323328191" cy="36.094235253127366" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="94.01664203302124" cy="40.643973913200824" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="94.7534852915723" cy="45.296219152955594" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="95" cy="50" r="2.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="94.7534852915723" cy="54.7037808470444" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="94.01664203302126" cy="59.35602608679916" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="92.79754323328191" cy="63.905764746872634" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="91.10954559391703" cy="68.303148938411" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="88.97114317029974" cy="72.49999999999999" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="86.40576474687263" cy="76.45033635316129" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="83.44151714648274" cy="80.11087728614862" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="80.11087728614862" cy="83.44151714648274" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="76.4503363531613" cy="86.40576474687262" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="72.5" cy="88.97114317029974" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="68.30314893841103" cy="91.10954559391703" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="63.905764746872634" cy="92.79754323328191" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="59.35602608679917" cy="94.01664203302126" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="54.70378084704442" cy="94.7534852915723" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="50.00000000000001" cy="95" r="2.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="45.296219152955615" cy="94.7534852915723" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="40.64397391320084" cy="94.01664203302126" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="36.09423525312735" cy="92.79754323328191" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="31.69685106158901" cy="91.10954559391705" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="27.499999999999996" cy="88.97114317029974" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="23.549663646838713" cy="86.40576474687263" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="19.88912271385138" cy="83.44151714648274" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="16.55848285351727" cy="80.11087728614864" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="13.594235253127373" cy="76.4503363531613" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="11.028856829700267" cy="72.50000000000003" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="8.89045440608296" cy="68.303148938411" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="7.202456766718093" cy="63.90576474687264" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="5.983357966978751" cy="59.35602608679919" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="5.246514708427696" cy="54.7037808470444" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="5" cy="50.00000000000001" r="2.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="5.246514708427696" cy="45.296219152955615" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="5.983357966978737" cy="40.64397391320087" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="7.202456766718086" cy="36.09423525312737" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="8.890454406082966" cy="31.696851061588976" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="11.02885682970026" cy="27.499999999999996" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="13.594235253127358" cy="23.54966364683872" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="16.55848285351724" cy="19.8891227138514" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="19.889122713851386" cy="16.558482853517262" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="23.5496636468387" cy="13.594235253127373" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="27.49999999999998" cy="11.028856829700274" r="1.6" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="31.696851061588994" cy="8.89045440608296" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="36.09423525312736" cy="7.202456766718093" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="40.64397391320081" cy="5.983357966978751" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="45.296219152955594" cy="5.2465147084277035" r="0.75" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <foreignObject x="-1" y="102" width="110" height="20">
          <div style={{
            textAlign: 'center',
            height: '20px',
            width: '110px',
            fontSize: '6.5px',
          }}>{date.toString()}</div>
        </foreignObject>
      </svg>
    </div>
  );
}

Alarm.propsType = {
  width: PropsType.number.isRequired,
  strokeWidth: PropsType.number.isRequired,
  color: PropsType.string.isRequired,
};

Alarm.defaultProps = {
  width: 170,
  color: '#000',
  strokeWidth: 1.1479591836734693877551020408163,
};

export default Alarm;