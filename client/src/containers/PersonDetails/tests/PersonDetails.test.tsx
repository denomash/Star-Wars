import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { createHistory, LocationProvider } from "@reach/router";

import PersonDetail from "../PersonDetails";

const renderer = new ShallowRenderer();

let history = createHistory(window);

describe("<PersonDetail />", () => {
  const Component = () => (
    <LocationProvider history={history}>
      <PersonDetail />
    </LocationProvider>
  );

  it("should render and match the snapshot", () => {
    renderer.render(<Component />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
