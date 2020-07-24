import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Input from "./components/Input";
import HeaderText from "./components/HeaderText";
import Table from "./components/Table";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TestUtils from "react-dom/test-utils";

configure({ adapter: new Adapter() });

test("basic title check", () => {
  const { getByText } = render(<HeaderText />);
  const linkElement = getByText(/Branch Code/gi);
  expect(linkElement).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

it("should recieve right props", function () {
  const component = mount(<Input placeholder="directions" />);
  expect(component.prop("placeholder")).toEqual("directions");
});

//simulate onChange to Input
//quite unfinished

// it("triggers the onChange function by entering text", () => {
//   const wrapper = document.createElement("div");
//   const onChange = jest.fn((data) => data);
//   ReactDOM.render(
//     <Input onChange={onChange}>
//       <Table Branch="Branch" Code="Code" />;
//     </Input>,
//     wrapper
//   );
//   const input = wrapper.querySelector("input");
//   const form = wrapper.querySelector("form");
//   TestUtils.Simulate.change(input, { target: { value: "67th" } });
//   TestUtils.Simulate.submit(form);
//   expect(onChange).toHaveBeenCalledTimes(1);
//   expect(onChange.mock.results[0].value).toEqual({ Branch: "67th" });
// });


//test the regex with random inputs
//test the regex filter with special characters

//test state change
