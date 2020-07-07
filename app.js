const express = require('express');
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

app.get("/", (req, res, next) => {
	res.send('<h1>Hello booldook!</h1>');
});

app.get("/user", (req, res, next) => {
	res.send('<h1>Hello '+req.query.name+'!</h1>');
});