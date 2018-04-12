import { shallow, mount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";
// import { expect } from 'chai'

import * as all from "../setup.js";

const todoItem = {
  title: "Love Front End testing :)",
  completed: true
};

describe("TodoItem.vue", () => {
  
  it("has the expected html structure", () => {
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  
  it("Renders title as 'Love Front End testing :)'", () => {
    const wrapper = shallow(TodoItem, { 
      propsData: { todoItem } 
    });
    expect(wrapper.vm.todoItem.title).toMatch("Love Front End testing :)");
  });
  
  it("Renders completed as true", () => {
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
let importantTodo;
describe("Important Flag button ", () => {
  beforeEach(() => {
    importantTodo = {
      title: "Love Front End testing :)",
      completed: true,
      important: true
    };
  });

  it("should render a button with important flag", () => {
    const wrapper = mount(TodoItem, {
      propsData: { todoItem: importantTodo }
    });
    expect(wrapper.find(".important-flag").exists()).toBe(true);
  });
  it("should set the colour to red when true", () => {
    const wrapper = mount(TodoItem, {
      propsData: { todoItem: importantTodo }
    });
    expect(wrapper.find(".red-flag").exists()).toBe(true);
  });
  it("should set the colour to not red when false", () => {
    importantTodo.important = false
    const wrapper = mount(TodoItem, {
      propsData: { todoItem: importantTodo }
    });
    expect(wrapper.find(".red-flag").exists()).toBe(false);
  });
  it("call the store when clicked", () => {
    // const wrapper = shallow(TodoItem, { methods , localVue})
    // const input = wrapper.find(".md-input");
    // input.trigger('keyup.enter')
    // expect(methods.newTodoAdded).toHaveBeenCalled()
  });
});
