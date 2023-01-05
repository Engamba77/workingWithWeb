import { Component } from "react";

class ReverseString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello React",
    };
  }

  handleReversed() {
    this.setState({
      message: this.state.message.split("").reverse().join(""),
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button
          onClick={() => {
            this.handleReversed();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
export default ReverseString;
