import { Component } from "react";
import "./form.css";

class ValidateForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="div">
        <div className="form">
          <label htmlFor="name">
            Username
            <input
              type="text"
              id="input1"
              name="name"
              placeholder="Enter Username"
            />
          </label>
          <label htmlFor="name">
            Email
            <input
              type="text"
              id="input1"
              name="name"
              placeholder="Enter email"
            />
          </label>
        </div>
      </div>
    );
  }
}
export default ValidateForm;
