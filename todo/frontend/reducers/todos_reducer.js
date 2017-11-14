import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};



const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach((todo) => {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
      let newerState = {};
      newerState[action.todo.id] = action.todo;
      return Object.assign({}, state, newerState);
    case REMOVE_TODO:
      let rState = Object.assign({}, state);
      delete rState[action.todo.id];
      return rState;
    default:
      return state;
  }
};

export default todosReducer;
