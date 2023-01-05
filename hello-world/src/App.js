import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    };
  }

  changeMessage() {
    // cannot update state directly, we need setState
    // this.state.message = 'Good morning' <- WRONG
    this.setState({
      message: "Good morning",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.changeMessage()}>Change</button>
      </div>
    );
  }
}

export default App;
