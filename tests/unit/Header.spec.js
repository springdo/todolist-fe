import { shallow, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import * as all from "../unit/setup.js";

describe("Header.vue", () => {

//   const Date = 15 / 12 / 1995;
//   it("has the expected html structure", () => {
//     const created = () => {}
//     const wrapper = shallow(Header, {
//       created
//     });
//     expect(wrapper.element).toMatchSnapshot();
//   });

  it("calls the loadTodos function from actionsjs when created", () => {
    const created = jest.fn();
    const wrapper = shallow(Header, {
      created
    });
    expect(created).toHaveBeenCalled();
  });
});
