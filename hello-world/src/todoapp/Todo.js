import { Component } from "react";
import "./style.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.value],
      value: "",
    });
  };

  handleDelete = (index) => {
    const delItems = [...this.state.items];
    delItems.splice(index, 1);
    this.setState({
      items: delItems,
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <h1 id="h1">Todo App</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="inputText"
              type="text"
              placeholder="Add item"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button id="btn" type="submit">
              ADD
            </button>
          </form>
          <ul>
            {this.state.items.map((item, index) => (
              <li key={index}>
                {item}
                <button
                  id="btnDel"
                  onClick={() => {
                    this.handleDelete(index);
                  }}
                >
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TodoApp;
