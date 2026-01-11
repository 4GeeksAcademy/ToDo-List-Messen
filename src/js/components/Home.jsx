import React, { useState } from "react";

const Home = () => {
	const [inputValor, setInputValor] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1 className="justify-content-center d-flex my-5">ToDo List</h1>

			<div id="demo" className="p-4 col-8 mx-auto">
				<div className="input-group mt-3">
					<input
						type="text"
						className="form-control"
						placeholder="Tareas por hacer"
						value={inputValor}
						onChange={(e) => setInputValor(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && inputValor.trim() !== "") {
								setTodos(todos.concat(inputValor));
								setInputValor("");
							}
						}}
					/>
				</div>

				<ul className="list-group mt-3">
					{todos.length === 0 ? (
						<li className="list-group-item text-muted">
							No hay tareas, añade una
						</li>
					) : (
						todos.map((tarea, index) => (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between align-items-center"
							>
								{tarea}
								<span
									className="text-danger"
									style={{ cursor: "pointer" }}
									onClick={() =>
										setTodos(todos.filter((_, i) => i !== index))
									}
								>
									❌
								</span>
							</li>
						))
					)}
				</ul>

				<p className="mt-3 text-muted">
					{todos.length} tarea{todos.length !== 1 && "s"} pendiente{todos.length !== 1 && "s"}
				</p>
			</div>
		</div>
	);
};

export default Home;