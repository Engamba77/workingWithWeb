import React, { useState } from "react";

const StateTest = () => {
  const [inputValue, setInputValue] = useState("Text");

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
      <input placeholder="Write Something!" onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTest;
