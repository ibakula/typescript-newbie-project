import { create, act } from 'react-test-renderer';
import TestFNComponent from './components/test-fn-component';
import TestComponent from './components/test-component';
import { TypeofTypeAnnotation } from '@babel/types';

test('Test component changes after prop update', function () {
  jest.useFakeTimers();
  let testRenderer: any = null;
  act(function() {
    testRenderer = create(<TestComponent requiredProp="remain the same" />);
  });
  jest.clearAllTimers();
  expect(testRenderer!.toJSON()).toMatchSnapshot();

  act(function() {
    testRenderer.update(<TestComponent requiredProp="differ in something" />);
  });
  jest.clearAllTimers();
  expect(testRenderer!.toJSON()).toMatchSnapshot();

  jest.useRealTimers();
});