import actions from "@/store/actions";
import store from "@/store";
import * as all from "../setup.js";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import sinon from "sinon";

const todos = [
  { id: 1, title: "learn testing", completed: true },
  { id: 2, title: "learn testing 2", completed: false }
];

describe("load todos", () => {
  beforeEach(() =>{
    let mock = new MockAdapter(axios);
    mock.onGet('http://localhost:9000/api/todos').reply(200, todos);
  });
  it("should call commit to the mutation function twice", (done) => {
    const commit = sinon.spy();
    actions.loadTodos({ commit }).then(() => {
      // console.log(commit)
      expect(commit.calledTwice).toBe(true);
      done();
    });
  });
  it("should first call SET_LOADING", (done) => {
    const commit = sinon.spy();
    actions.loadTodos({ commit }).then(() => {
      // console.log(commit.firstCall.args[0])
      expect(commit.firstCall.args[0]).toBe("SET_TODOS");
      done();
    });
  });
  it("should second call SET_TODOS", (done) => {
    const commit = sinon.spy();
    actions.loadTodos({ commit }).then(() => {
      // console.log(commit)
      expect(commit.secondCall.args[0]).toBe("SET_LOADING");
      done();
    });
  });

});
