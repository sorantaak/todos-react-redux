import React from "react";
import {
	deleteTodo,
	toggleTodoDone,
	editTodo,
} from "../../store/slices/todosSlice";
import { useDispatch } from "react-redux";
const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const deleteTodoHandler = () => {
		dispatch(deleteTodo(todo.id));
	};
	const toggleTodoHandler = () => {
		dispatch(toggleTodoDone(todo.id));
		dispatch(editTodo({ id: todo.id, text: "new text" }));
	};
	return (
		<div className="flex mb-4 items-center">
			<p
				className={`mr-auto ${
					todo.done ? "line-through text-green-600" : "text-gray-700"
				} `}
			>
				{todo.text}
			</p>

			{todo.done ? (
				<button
					onClick={toggleTodoHandler}
					className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400"
				>
					Not Done
				</button>
			) : (
				<button
					onClick={toggleTodoHandler}
					className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
				>
					Done
				</button>
			)}
			<button
				onClick={deleteTodoHandler}
				className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
			>
				Remove
			</button>
		</div>
	);
};

export default TodoItem;
