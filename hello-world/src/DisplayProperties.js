import { Component } from "react";

class DisplayProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
    };
  }

  handleKeyPress = (event) => {
    this.setState({
      key: event.key,
    });
  };

  onentDidMount() {
    console.log("mounted");
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <p>Press any Key:{this.handleKeyPress()}</p>
      </div>
    );
  }
}
export default DisplayProperties;
