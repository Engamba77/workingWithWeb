import { Component } from "react";
const contentsArray = [{ name: "John" }, { name: "Max" }, { name: "Mikey" }];

class KeyListener extends Component {
  constructor(props) {
    super(props);
  }
  // declarative rendering

  render() {
    // const myStyle = {
    //   background: "blue",
    //   color: "white",
    //   padding: "20px",
    //   margin: "20px",
    //   display: "inline-block",
    // };
    return (
      <div>
        {contentsArray.map((el, key) => {
          return <div key={key}>{el.name}</div>;
        })}
      </div>
    );
  }
}

export default KeyListener;
