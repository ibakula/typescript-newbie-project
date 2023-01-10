import { Component } from "react";
import TestFNComponent from "./test-fn-component";
import DragTestComponent from "./drag-test";

type OptionalProps = {
  [propName: string]: object | Function | string | number;
}

type Props = OptionalProps & {
  requiredProp: string;
};

type State = OptionalProps extends { [propName: string]: infer Type } ? { [propName: string]: Type | null } : never;

export default class TestComponent extends Component<Props, State> {
  state: State = {
    init: null
  };

  render() {
    return (
      <>
        <TestFNComponent {...this.props} />
        <TestFNComponent />
        <DragTestComponent />
      </>
    );
  }
};