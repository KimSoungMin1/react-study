import { useRef } from "react";
import { createRef } from "react";
import { useState } from "react";

const Ref = () => {
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const input1Ref = createRef();
  const input2Ref = useRef(null);

  console.log(input1Ref.current, input2Ref.current);
  console.log(ref);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={ref} />
      <input ref={input2Ref} />
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
};
export default Ref;
