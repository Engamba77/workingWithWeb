import { Component } from "react";

class DisplayKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
    };
  }

  handleKeyDown(event) {
    this.setState({
      key: event.key,
    });
  }

  handleKeyUp(event) {
    this.setState({
      key: this.event.keyCode,
    });
  }

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div>
        <p>
          Press any Key:
          {
            (onkeydown = () => {
              this.handleKey();
            })
          }
        </p>
      </div>
    );
  }
}
export default DisplayKey;
