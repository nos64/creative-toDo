import React from 'react';
import './Greeting.css';
import { ThemeContext} from '../ThemeContext/ThemeContext';

const Greeting: React.FC = () => {
  const date: Date = new Date();
  const hours: number = date.getHours();
  let timeOfDay: string;

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