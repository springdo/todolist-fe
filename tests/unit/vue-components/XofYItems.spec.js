import { shallow, createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import XofYItems from "@/components/XofYItems.vue";

import * as all from "../setup.js";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("XofYItems.vue", () => {
  let store;

  const todos = [
    {
      title: "Learn awesome things about Labs",
      completed: false,
      important: false
    }
  ];
  //   const methods = {
  //     sumDoneTodoItems: jest.fn()
  //   };
  const actions = {
    loadTodos: jest.fn(),
    clearTodos: jest.fn()
  };
  const getters = {
    todos: jest.fn()
  };

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    });
  });

  it("returns the correct length of todos", () => {
    const mockedTodos = [
      {
        title: "Learn awesome things about Labs",
        completed: true,
        important: false
      },
      {
        title: "Learn more awesome things about Labs",
        completed: true,
        important: false
      },
      {
        title: "Learn even more awesome things about Labs",
        completed: false,
        important: false
      }
    ];

    expect(mockedTodos.length).toEqual(3);
    // Replace with testing the sumDoneTodoItems function and check it it's called
    // expect(sumDoneTodoItems).toHaveBeenCalled()
  });
});
