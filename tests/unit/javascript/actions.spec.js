import actions from "@/store/actions";
import store from "@/store";
import * as all from "../setup.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinon from "sinon";

const todos = [
  { id: 1, title: "learn testing", completed: true },
  { id: 2, title: "learn testing 2", completed: false }
];

describe("loadTodos", () => {
  beforeEach(() => {
    let mock = new MockAdapter(axios);
    mock.onGet("http://localhost:9000/api/todos").reply(200, todos);
  });
  it("should call commit to the mutation function twice", done => {
    const commit = sinon.spy();
    actions.loadTodos({ commit }).then(() => {
      // console.log(commit)
      expect(commit.calledTwice).toBe(true);
      done();
    });
  });
  it("should first call SET_LOADING", done => {
    const commit = sinon.spy();
    actions.loadTodos({ commit }).then(() => {
      // console.log(commit.firstCall.args[0])
      expect(commit.firstCall.args[0]).toBe("SET_TODOS");
      done();
    });
  });
  it("should second call SET_TODOS", done => {
    const commit = sinon.spy();
    actions.loadTodos({ commit }).then(() => {
      // console.log(commit)
      expect(commit.secondCall.args[0]).toBe("SET_LOADING");
      done();
    });
  });
});

/*
  addTodo({ commit, state }) {
    if (!state.newTodo) {
      // do not add empty todos
      return;
    }
    // debugger
    const todo = {
      title: state.newTodo,
      completed: false,
      important: false
    };
    axios
      .post(config.todoEndpoint, todo)
      .then(mongoTodo => {
        commit("ADD_TODO", mongoTodo.data);
      })
      .catch(err => {
        if (err) {
          console.info("INFO - Adding dummy todo because of ", err);
          let mongoTodo = todo;
          mongoTodo._id = "fake-todo-item-" + Math.random();
          commit("ADD_TODO", mongoTodo);
        }
      });
  },

*/

let state;
describe("addTodos", () => {
  beforeEach(() => {
    state = {};
    let mock = new MockAdapter(axios);
    // mock.onPost(/http:\/\/localhost:9000\/api\/todos\/.*/, {})
    mock.onPost("http://localhost:9000/api/todos").reply(200, todos);
  });
  it("should call commit to the mutation function once", done => {
    const commit = sinon.spy();
    state.newTodo = "Learn some mocking";
    actions.addTodo({ commit, state }).then(() => {
      // console.log(commit)
      expect(commit.calledOnce).toBe(true);
      done();
    });
  });
  it("should first call ADD_TODO", done => {
    const commit = sinon.spy();
    state.newTodo = "Learn some mocking";
    actions.addTodo({ commit, state }).then(() => {
      // console.log(commit.firstCall.args[0])
      expect(commit.firstCall.args[0]).toBe("ADD_TODO");
      done();
    });
  });
});
