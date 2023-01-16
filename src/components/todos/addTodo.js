import axios from "axios";
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
	const addTodoHandler = async () => {
		if (inputTodo.length > 0) {
			try {
				let res = await axios.post(
					"https://634a6c4376028b55ae731673.endapi.io/todos",
					{
						text: inputTodo,
						done: false,
					}
				);
				console.log(res.data.data);
				dispatch(addTodo(res.data.data));
				setInputTodo("");
			} catch (error) {
				console.log(error);
			}
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
