import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./../../store/slices/todosSlice";
function AddTodo() {
	const [inputTodo, setInputTodo] = useState("");
	const dispatch = useDispatch();
	const inputTodoHandler = (e) => {
		setInputTodo(e.target.value);
	};
	const addTodoHandler = () => {
		if (inputTodo.length > 0) {
			dispatch(
				addTodo({
					text: inputTodo,
					done: false,
					id: new Date().getTime(),
				})
			);
			setInputTodo("");
		}
	};
	return (
		<div className="flex mt-4">
			<input
				onChange={inputTodoHandler}
				className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
				placeholder="Add Todo"
				value={inputTodo}
			/>
			<button
				onClick={addTodoHandler}
				className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500"
			>
				Add
			</button>
		</div>
	);
}

export default AddTodo;
