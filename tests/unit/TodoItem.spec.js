import { shallow } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";
// import { expect } from 'chai'

import * as all from "../unit/setup.js";

describe("TodoItem.vue", () => {
  
  it("has the expected html structure", () => {
    const todoItem = { };
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  
  // it("has the expected html structure", () => {
  //   const todoItem = {
  //     completed: false,
  //     title: "",
  //     important: false
  //   };
  //   const wrapper = shallow(TodoItem, { 
  //     propsData: { todoItem } 
  //   });
  //   expect(wrapper.element).toMatchSnapshot();
  // });
  
  // it("renders props.placeholderMsg when passed", () => {
  //   const msg = "Add a Todo";
  //   const wrapper = shallow(NewTodo, {
  //     propsData: { placeholderMsg: msg }
  //   });
  //   expect(wrapper.vm._props.placeholderMsg).toMatch(msg);
  // });

  // it("renders newTodo as empty string", () => {
  //   const wrapper = shallow(NewTodo, {});
  //   expect(wrapper.vm.newTodo).toMatch("");
  // });

  

});
