import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import StepsComponent from "./StepsComponent";

describe("Testing states", () => {
  test("It renders 'FirstStep' component if the Ui State is 1", () => {
    render(<StepsComponent />);
  });
});
