import React from "react";
import { render, screen } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";

import App from "../Routes";

const renderer = new ShallowRenderer();

describe("<App />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<App />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
