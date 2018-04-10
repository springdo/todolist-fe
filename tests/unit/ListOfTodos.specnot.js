import { shallow, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ListOfTodos from "@/components/ListOfTodos.vue";
// import { expect } from 'chai'

import * as all from "../unit/setup.js";

// const localVue = createLocalVue();

// createLocalVue.use(Vuex);

// describe("ListOfTodos.vue", () => {
//   it("has the expected html structure", () => {
//     const todos = [
//       {
//         title: "Learn awesome things about Labs",
//         completed: false,
//         important: false
//       },
//       {
//         title: "Learn about my friend Jenkins",
//         completed: true,
//         important: false
//       },
//       {
//         title: "Drink Coffee",
//         completed: false,
//         important: true
//       }
//     ];
//     const wrapper = shallow(ListOfTodos, {
//       propsData: { todos }
//     });
//     expect(wrapper.element).toMatchSnapshot();
//   });
// });
