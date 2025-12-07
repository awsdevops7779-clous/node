const express = require('express');
 const app = express();
app.use(express.json());
// Temporary in-memory To-Do list
 let todos = [];
// Home route
 app.get('/', (req, res) => {
 	res.send("To-Do App running on Node.js with Express");
 });
// Add a new todo
 app.post('/add', (req, res) => {
 	const task = req.body.task;
if (!task) {
     	return res.status(400).send({ error: "Task is required" });
 	}
todos.push(task);
 	res.send({ message: "Task Added", todos });
 });
// List all todos
 app.get('/list', (req, res) => {
 	res.send(todos);
 });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 	console.log(`Server running on port ${PORT}`);
 });