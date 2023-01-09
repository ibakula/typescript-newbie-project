/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import TestFNComponent from './components/test-fn-component';

test("Test tools from test library", async function () {
  render(<TestFNComponent />);
  const [ textField ] = await screen.findAllByRole("textbox") as HTMLInputElement[];
  expect(textField.value).toBe("No required prop supplied");
  fireEvent.input(textField, { target: {value:"yes"}});
  expect(textField.value).toBe("yes");
});