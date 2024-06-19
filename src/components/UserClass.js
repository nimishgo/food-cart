import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  componentDidMount() {
    console.log("mount 🙂 ");
  }

  render() {
    const { name, userName } = this.props;
    const { count, count2 } = this.state;
    return (
      <>
        <h1>name : {name}</h1>
        {console.log(Component)}
        <h1>username : {userName}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          count +
        </button>
        <h1>{count}</h1>
        <h1>{count2}</h1>
      </>
    );
  }
}
