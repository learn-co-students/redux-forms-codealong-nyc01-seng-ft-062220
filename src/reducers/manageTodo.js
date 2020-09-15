export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log("reducer received this action:", action);
  switch (action.type) {
    case 'ADD_TODO':

      console.log({ todos: state.todos.concat(action.input.text) });

      return { todos: state.todos.concat(action.input.text) };

    default:
      return state;
  }
}
