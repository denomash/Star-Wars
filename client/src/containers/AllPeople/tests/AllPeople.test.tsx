import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import TestRenderer from "react-test-renderer";

import { MockedProvider } from "@apollo/client/testing";
import { createHistory, LocationProvider } from "@reach/router";

import AllPeople from "../index";

const renderer = new ShallowRenderer();
const mocks: Array<any> = [];
let history = createHistory(window);

describe("<AllPeople />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<AllPeople />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("renders without error", () => {
    const Component = () => (
      <LocationProvider history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <AllPeople />
        </MockedProvider>
      </LocationProvider>
    );
    const component = TestRenderer.create(<Component />);

    const tree: any = component.toJSON();
    expect(tree.children[0].children[0].children[0]).toContain("The Star Wars People");
  });
});
