import React from 'react';
import './Greeting.css';
import { ThemeContext} from '../ThemeContext/ThemeContext';
export default class Greeting extends React.Component {
  static contextType = ThemeContext;

  render() {
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
      <h1 className={`head-${this.context} head`}>
        Good {timeOfDay}!
      </h1>
    );
  }
}
