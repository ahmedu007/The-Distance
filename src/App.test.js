import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App events={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders the loading state if there are no events", () => {
  const loading = renderer.create(<App loading={false} events={[]} />);
  expect(loading).toMatchSnapshot();
});
