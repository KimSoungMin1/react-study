import { useEffect } from "react";
import { useState } from "react";

const UseHook = () => {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("didmount ", count);

    return () => {
      //cleanup
      //willUnmount
    };
  }, []);
  useEffect(() => {
    console.log("didmount & update", count);
    return () => {
      //cleanup
      console.log("cleanup", count);
    };
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={click}></button>
    </div>
  );
};

export default UseHook;
