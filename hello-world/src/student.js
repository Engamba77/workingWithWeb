import React from "react";
export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mike",
    };
  }

  render() {
    // console.warn(this.props.name);
    return (
      <div>
        <h1>HELLO {this.state.name} </h1>
      </div>
    );
  }
}
