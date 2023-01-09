import { create, act } from 'react-test-renderer';
import TestFNComponent from './components/test-fn-component';
import TestComponent from './components/test-component';

test('Test component changes after prop update', function () {
  let testRenderer: any = null;
  act(function() {
    testRenderer = create(<TestComponent requiredProp="remain the same" />);
  });
  expect(testRenderer!.toJSON()).toMatchSnapshot();
  act(function() {
    testRenderer.update(<TestComponent requiredProp="differ in something" />);
  });
  expect(testRenderer!.toJSON()).toMatchSnapshot();
});