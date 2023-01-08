/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import type { Root } from 'react-dom/client';
import ReactTestUtils from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import TestFNComponent from "./components/test-fn-component";

// Modify typedef
declare module "react-dom/test-utils" {
  export interface SyntheticEventData {
    data?: string;
  }
};

test("Test rendering utils with JSDOM", function () {
  const container = document.createElement("div");
  container.id = "root";
  document.body.append(container);
  let root: null | Root = null;
  ReactTestUtils.act(function () {
    root = createRoot(container);
    root.render(<TestFNComponent />);
  });

  const firstInputText = document.querySelector("input[type=\"text\"]") as HTMLInputElement;

  ReactTestUtils.act(function() {
    firstInputText!.value = "Test string";
    ReactTestUtils.Simulate.change(firstInputText!);
  });

  expect(firstInputText.value).toBe("Test string");
});