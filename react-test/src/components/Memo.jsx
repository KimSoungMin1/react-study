import { useCallback } from "react";
import { useEffect, useMemo } from "react";
import { useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}
const Memo = () => {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Mark", age: 39 },
    { name: "Hanna", age: 28 },
  ]);
  const count = useMemo(() => {
    console.log("메모");
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log("콜백");
    return sum(persons);
  }, [persons]);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>xx</button>
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
};

export default Memo;
