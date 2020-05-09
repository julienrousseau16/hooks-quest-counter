import React, { useState } from "react";

const Counter = () => {
  const [init, setIn] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Le compteur est initialisé à :</p>
      <input
        type="number"
        value={init}
        onChange={(e) => {
          setIn(e.target.value)
          setCount(parseInt(e.target.value))
        }}
        style={{ width: "40px" }}
      />
      <p>Le compteur est actuellement à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default Counter;
