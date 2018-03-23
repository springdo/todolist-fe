import { shallow } from "@vue/test-utils";
import NewTodo from "@/components/NewTodo.vue";
// import { expect } from 'chai'

import * as all from "../unit/setup.js";

describe("NewTodo.vue", () => {
  it("renders props.placeholderMsg when passed", () => {
    const msg = "Add a Todo";
    const wrapper = shallow(NewTodo, {
      propsData: { placeholderMsg: msg }
    });
    expect(wrapper.vm._props.placeholderMsg).toMatch(msg);
  });

  it("renders newTodo as empty string", () => {
    const wrapper = shallow(NewTodo, {});
    expect(wrapper.vm.newTodo).toMatch("");
  });

});
