import PersonContext from "../contexts/PersonContext";

const Cont = () => {
  return (
    <PersonContext.Consumer>
      {(persons) => (
        <ul>
          {persons.map((persons) => (
            <li>{persons.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
};

export default Cont;
