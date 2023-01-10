/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import TestFNComponent from './components/test-fn-component';
import DragTestComponent from "./components/drag-test";

afterEach(cleanup);

test("Test tools from test library with some components", async function () {
  render(<TestFNComponent />);
  const [ textField ] = await screen.findAllByRole("textbox") as HTMLInputElement[];
  expect(textField.value).toBe("No required prop supplied");
  fireEvent.input(textField, { target: {value:"yes"}});
  expect(textField.value).toBe("yes");
});

test("Try out dragging and dropping testing component", async function () {
  render(<DragTestComponent />);
  const img = await screen.findByRole("img") as HTMLImageElement;
  const [ containerDiv, secondContainer, dropContainer ] = await screen.findAllByRole("generic") as HTMLDivElement[];
  fireEvent.drag(img, {target: img});
  fireEvent.drop(dropContainer, {target: dropContainer});
  expect(dropContainer.firstElementChild).toBeInstanceOf(HTMLImageElement);
});