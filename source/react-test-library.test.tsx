/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import TestFNComponent from './components/test-fn-component';
import DragTestComponent from "./components/drag-test";

afterEach(cleanup);
beforeEach(jest.resetModules);

test("Tryout of mocking a module", async function() {
  expect.assertions(1);
  jest.doMock("./components/drag-test", function() {
    return () => (<div aria-label="automock-rocks">Nothing to see here! :)</div>);
  });
  const TestComponent = await import("./components/drag-test");
  render(<TestComponent.default />);
  const divElement = await screen.findByRole("generic", {name: "automock-rocks"}) as HTMLDivElement;
  expect((divElement.firstChild as Node).textContent).toBe("Nothing to see here! :)");
});

test("Test tools from test library with some components", async function () {
  expect.assertions(2);
  render(<TestFNComponent />);
  const [ textField ] = await screen.findAllByRole("textbox") as HTMLInputElement[];
  expect(textField.value).toBe("No required prop supplied");
  fireEvent.input(textField, { target: {value:"yes"}});
  expect(textField.value).toBe("yes");
});

test("Try out dragging and dropping testing component", async function () {
  expect.assertions(1);
  render(<DragTestComponent />);
  const img = await screen.findByRole("img") as HTMLImageElement;
  const [ containerDiv, secondContainer, dropContainer ] = await screen.findAllByRole("generic") as HTMLDivElement[];
  fireEvent.drag(img, {target: img});
  fireEvent.drop(dropContainer, {target: dropContainer});
  expect(dropContainer.firstElementChild).toBeInstanceOf(HTMLImageElement);
});