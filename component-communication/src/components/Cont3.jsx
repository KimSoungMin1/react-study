import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

const Cont3 = () => {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map((persons) => (
        <li>{persons.name}</li>
      ))}
    </ul>
  );
};

export default Cont3;
