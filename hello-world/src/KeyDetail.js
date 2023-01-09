import { Component } from "react";

class KeyDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="property">{this.props.value}</div>
      </div>
    );
  }
}
export default KeyDetail;
