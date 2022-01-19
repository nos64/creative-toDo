import React from 'react';
import './Greeting.css';
import { ThemeContext} from '../ThemeContext/ThemeContext';

const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours > 6 && hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  return (
    <ThemeContext.Consumer>
      {context => (
      <h1 className={`head-${context} head`}>
        Good {timeOfDay}!
      </h1>
      )}
    </ThemeContext.Consumer>
  );
}

export default Greeting;