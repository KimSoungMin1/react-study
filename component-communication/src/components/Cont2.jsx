import React from "react";
import PersonContext from "../contexts/PersonContext";
export default class Cont2 extends React.Component {
  static contextType = PersonContext;
  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((persons) => (
          <li>{persons.name}</li>
        ))}
      </ul>
    );
  }
}
