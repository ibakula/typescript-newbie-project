import { Component } from "react";
import TestFNComponent from "./test-fn-component";

class TestComponent extends Component {
  render() {
    return (
      <>
        <TestFNComponent />
        <TestFNComponent />
      </>
    );
  }
}

export default TestComponent;