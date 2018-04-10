import { shallow } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";
// import { expect } from 'chai'

import * as all from "../unit/setup.js";

describe("TodoItem.vue", () => {
  
  it("has the expected html structure", () => {
    const todoItem = {};
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  
  it("Renders title as 'TestTitle'", () => {
    const todoItem = {
      title: "TestTitle"
    };
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.vm.todoItem.title).toMatch("TestTitle");
  });
  
  it("Renders completed as true", () => {
    const todoItem = {
      completed : true
    };
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.vm.todoItem.completed).toEqual(true);
  });

  // it("won't render additional props", () => {
  //   const biscuits = "digestives"
  //   const wrapper = shallow(TodoItem, { 
  //     propsData: { biscuits } 
  //   });
  //   expect(wrapper.vm.todoItem).toBe("undefined");
  // });
  
  it("Renders important as false", () => {
    const todoItem = {
      important : false
    };
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.vm.todoItem.important).toEqual(false);
  });
  
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
