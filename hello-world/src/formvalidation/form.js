import { Component } from "react";
import "./form.css";

class ValidateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  formValidation = () => {
    const { username, email, password, confirmPassword } = this.state;
    const errors = {};
    let formIsValid = true;

    if (!username) {
      errors.username = "Please enter a username.";
      formIsValid = false;
    }

    if (!email) {
      errors.email = "Please enter a valid email";
      formIsValid = false;
    }

    if (!password) {
      errors.password = "Please enter password";
      formIsValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Password does not match";
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formIsValid = this.formValidation();

    if (formIsValid) {
      this.setState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, email, password, confirmPassword, errors } = this.state;
    return (
      <div className="container">
        <div>
          <h1 id="h1">Registration Form</h1>
        </div>
        <form id="form" onSubmit={this.handleSubmit}>
          <label id="label">
            Username
            <input
              id="inputBox"
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.handleChange}
            />
            <span id="span">{errors.username}</span>
          </label>
          <label id="label">
            Email
            <input
              id="inputBox"
              type="email"
              name="username"
              placeholder="Enter email"
              value={email}
              onChange={this.handleChange}
            />
            <span id="span">{errors.email}</span>
          </label>
          <label id="label">
            Password
            <input
              id="inputBox"
              type="password"
              name="username"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
            />
            <span id="span">{errors.password}</span>
          </label>
          <label id="label">
            Confirm Password
            <input
              id="inputBox"
              type="password"
              name="username"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            <span id="span">{errors.password}</span>
          </label>
          <label id="label">
            <button id="btn" type="submit" value="">
              Submit
            </button>
          </label>
        </form>
      </div>
    );
  }
}
export default ValidateForm;
