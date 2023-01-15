import React from "react";
import AddTodo from "./addTodo";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem";
function TodosSection() {
	const todos = useSelector((state) => state.todos.list);
	console.log(todos);
	return (
		<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
			<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
				<div className="mb-4">
					<h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
					<AddTodo />
				</div>
				<div>
					{todos.length > 0 &&
						todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
					{/* <div className="flex justify-between mb-4 items-center">
						<p className="mr-auto line-through text-green-600">
							Submit Todo App Component to Tailwind Components
						</p>
						<div className="flex items-center">
							<button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">
								Not Done
							</button>
							<button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">
								Remove
							</button>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default TodosSection;
