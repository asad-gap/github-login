import React, { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <br></br>
      {display && `the Name is : ${name}`}
      <input
        type="text"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <button
        onClick={() =>
          setDisplay({
            display: true,
          })
        }
      >
        Ok
      </button>
    </div>
  );
};

export default HomePage;
