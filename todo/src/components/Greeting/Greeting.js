import React from "react";

export default class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
  
    const styles = {
      fontSize: 34,
      textAlign: "center",
      textShadow: "2px 2px 10px #000",
      padding: 10,
      margin: 20,
      border: "none",
      borderRadius: 10,
    }
  
    if (hours > 6 && hours < 12) {
      timeOfDay = "morning";
      styles.color = "rgba(252, 250, 137)";
    } else if (hours >= 12 && hours < 18) {
      timeOfDay = "afternoon";
      styles.color = "rgba(255, 166, 83)";
    } else {
      timeOfDay = "evening";
      styles.color = "rgba(35, 19, 107)";
    }
    return (
      <h1 style={styles}>
        Good {timeOfDay}!
      </h1>
    )
  }
  
}
