import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: "todos",
	initialState: {
		list: [],
	},
	reducers: {
		setTodos: (state, { payload }) => {
			state.list = payload;
		},
		addTodo: (state, action) => {
			state.list.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.list = state.list.filter((item) => item.id !== action.payload);
		},
		toggleTodoDone: (state, { payload }) => {
			state.list = state.list.map((todo) => {
				return todo.id === payload
					? {
							...todo,
							done: !todo.done,
					  }
					: todo;
			});
		},
		editTodo: (state, { payload }) => {
			state.list = state.list.map((todo) => {
				return todo.id === payload.id
					? {
							...todo,
							text: payload.text,
					  }
					: todo;
			});
		},
	},
});
export const { addTodo, deleteTodo, toggleTodoDone, editTodo, setTodos } =
	todosSlice.actions;
export default todosSlice.reducer;
