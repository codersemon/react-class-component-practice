import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      input: {
        name: "",
        age: "",
      },
    };
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
        ...prevState,
        input: {
            ...this.state.input,
            [e.target.name]: e.target.value
        }
    }))
  }

  render() {
    const {name, age} = this.state.input
    return (
      <div>
        <input type="text" placeholder="name" name="name" value={name} onChange={this.handleInputChange} />
        <input type="text" placeholder="age" name="age" value={age} onChange={this.handleInputChange} />
      </div>
    );
  }
}

