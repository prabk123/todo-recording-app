import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  START_RECORD,
  END_RECORD,
  RESET_RECORD
} from "Actions/actionTypes";
import todoReducer from "./todoReducer";

describe("To Do Reducer", () => {
  const DEFAULT_STATE = {
    todos: [
      {
        id: 1,
        name: "Test 1",
        description: "Test 1 Desc",
        createdAt: new Date()
      },
      {
        id: 2,
        name: "Test 2",
        description: "Test 2 Desc",
        createdAt: new Date()
      },
      {
        id: 3,
        name: "Test 3",
        description: "Test 3 Desc",
        createdAt: new Date()
      }
    ],
    id: 3,
    recording: false,
    record: []
  };

  it("Should return default state", () => {
    const newState = todoReducer(DEFAULT_STATE, {});
    expect(newState).toEqual(DEFAULT_STATE);
  });

  it("Should return correct state when getting events", () => {
    const action = { type: GET_TODOS };
    const newState = todoReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(DEFAULT_STATE);
  });

  it("Should return the correct state when adding a to do", () => {
    const newTodo = {
      name: "Test 4",
      description: "Test 4 Desc",
      createdAt: new Date()
    };
    const expectedState = {
      todos: [
        {
          id: 4,
          name: newTodo.name,
          description: newTodo.description,
          createdAt: newTodo.createdAt
        },
        ...DEFAULT_STATE.todos
      ],
      id: 4,
      recording: false,
      record: []
    };
    const action = { type: ADD_TODO, todo: newTodo };
    const newState = todoReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when a to do is removed", () => {
    const todos = DEFAULT_STATE.todos.filter(x => x.id !== 1);
    const expectedState = {
      todos: todos,
      id: 3,
      recording: false,
      record: []
    };
    const action = { type: REMOVE_TODO, id: 1 };
    const newState = todoReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when a recording has started", () => {
    const expectedState = { ...DEFAULT_STATE };
    expectedState.recording = true;
    expectedState.record = [
      { actionType: START_RECORD, todos: DEFAULT_STATE.todos }
    ];
    const action = { type: START_RECORD };
    const newState = todoReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when recording is ended", () => {
    const expectedState = { ...DEFAULT_STATE };
    expectedState.recording = false;
    const action = { type: END_RECORD };
    const newState = todoReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when app is reset", () => {
    const NEW_DEFAULT_STATE = { ...DEFAULT_STATE };
    NEW_DEFAULT_STATE.record = [
      {
        actionType: START_RECORD,
        todos: []
      },
      {
        actionType: ADD_TODO,
        todos: [
          {
            id: 1,
            name: "Test 1",
            description: "Test 1 Desc",
            createdAt: new Date()
          }
        ]
      },
      {
        actionType: ADD_TODO,
        todos: [
          {
            id: 1,
            name: "Test 1",
            description: "Test 1 Desc",
            createdAt: new Date()
          },
          {
            id: 2,
            name: "Test 2",
            description: "Test 2 Desc",
            createdAt: new Date()
          }
        ]
      },
      {
        actionType: ADD_TODO,
        todos: [
          {
            id: 1,
            name: "Test 1",
            description: "Test 1 Desc",
            createdAt: new Date()
          },
          {
            id: 2,
            name: "Test 2",
            description: "Test 2 Desc",
            createdAt: new Date()
          },
          {
            id: 3,
            name: "Test 3",
            description: "Test 3 Desc",
            createdAt: new Date()
          }
        ]
      }
    ];
    const expectedState = {
      todos: [],
      id: 0,
      recording: false,
      record: []
    };
    const action = { type: RESET_RECORD };
    const newState = todoReducer(NEW_DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });
});
