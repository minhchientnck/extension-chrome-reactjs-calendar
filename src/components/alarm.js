import React, { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import './style.css';

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
      width: `${props.width}px`
    }}>
      <svg viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="0" cy="0" r=".98" fill="none" stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0" cy="0" r=".03" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <polygon
          points="0,0 -0.05,-0.25 0,-0.6 .05,-0.25"
          fill="#ff0303"
          stroke="#ff0303"
          strokeWidth={`${props.strokeWidth}`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${hourDeg} 0 0;${hourDeg} 0 0`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <polygon
          points="0,0 -0.05,-0.25 0,-0.8 .05,-0.25"
          fill="#0b0f93"
          stroke="#0b0f93"
          strokeWidth={`${props.strokeWidth}`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${minuteDeg} 0 0;${minuteDeg} 0 0`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <polygon
          points="0,0 -0.02,0 -0.02,-0.85 0.02,-0.85 0.02,0"
          strokeWidth=".05"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${secondDeg} 0 0;${secondDeg} 0 0`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <circle cx="0" cy="-0.9" r=".05" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.09407561694088812" cy="-0.895069705831446" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.1871205217359834" cy="-0.8803328406604252" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.2781152949374527" cy="-0.8559508646656382" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.36606297876822014" cy="-0.8221909118783408" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.44999999999999996" cy="-0.7794228634059949" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.5290067270632258" cy="-0.7281152949374528" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.6022175457229725" cy="-0.6688303429296548" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.6688303429296548" cy="-0.6022175457229725" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.7281152949374528" cy="-0.5290067270632258" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.7794228634059948" cy="-0.4500000000000001" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.8221909118783408" cy="-0.3660629787682202" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.8559508646656382" cy="-0.27811529493745274" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.880332840660425" cy="-0.1871205217359835" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.895069705831446" cy="-0.09407561694088812" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.9" cy="-5.5109105961630896e-17" r=".05" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.8950697058314461" cy="0.09407561694088801" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.8803328406604252" cy="0.1871205217359832" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.8559508646656383" cy="0.27811529493745263" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.8221909118783409" cy="0.3660629787682201" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.7794228634059949" cy="0.4499999999999998" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.7281152949374528" cy="0.5290067270632257" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.6688303429296548" cy="0.6022175457229725" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.6022175457229725" cy="0.6688303429296547" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.5290067270632259" cy="0.7281152949374526" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.44999999999999996" cy="0.7794228634059949" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.3660629787682204" cy="0.8221909118783407" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.27811529493745274" cy="0.8559508646656382" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.1871205217359834" cy="0.8803328406604252" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="0.09407561694088837" cy="0.895069705831446" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="1.1021821192326179e-16" cy="0.9" r=".05" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.09407561694088776" cy="0.8950697058314461" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.18712052173598318" cy="0.8803328406604252" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.27811529493745296" cy="0.8559508646656382" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.36606297876821986" cy="0.822190911878341" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.4500000000000001" cy="0.7794228634059948" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.5290067270632257" cy="0.7281152949374528" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.6022175457229725" cy="0.6688303429296548" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.6688303429296546" cy="0.6022175457229726" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.7281152949374526" cy="0.5290067270632259" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.7794228634059946" cy="0.4500000000000004" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8221909118783409" cy="0.3660629787682201" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8559508646656382" cy="0.2781152949374528" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.880332840660425" cy="0.1871205217359838" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8950697058314461" cy="0.09407561694088802" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.9" cy="1.6532731788489269e-16" r=".05" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8950697058314461" cy="-0.09407561694088769" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8803328406604253" cy="-0.1871205217359827" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8559508646656383" cy="-0.2781152949374525" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.8221909118783407" cy="-0.36606297876822047" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.7794228634059948" cy="-0.4500000000000001" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.7281152949374529" cy="-0.5290067270632256" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.6688303429296552" cy="-0.602217545722972" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.6022175457229724" cy="-0.6688303429296548" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.529006727063226" cy="-0.7281152949374526" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.4500000000000004" cy="-0.7794228634059945" r=".025" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.36606297876822014" cy="-0.8221909118783409" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.27811529493745285" cy="-0.8559508646656382" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.1871205217359839" cy="-0.880332840660425" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="-0.09407561694088808" cy="-0.895069705831446" r=".01" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
      </svg>
      <div className="date-label">{date.toString()}</div>
    </div>
  );
}

Alarm.propsType = {
  width: PropsType.number.isRequired,
  strokeWidth: PropsType.number.isRequired,
  color: PropsType.string.isRequired,
};

Alarm.defaultProps = {
  width: 200,
  color: '#000',
  strokeWidth: .025,
};

export default Alarm;