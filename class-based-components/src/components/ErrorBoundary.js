import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <p>User not found</p>;
    }

    return this.props.children;
  }
}
