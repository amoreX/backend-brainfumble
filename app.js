import express from "express";

const app = express();

app.use(express.json()); // parses every incoming request into a JSON object

const promseOne = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("this is the async function");
		resolve();
	}, 2000);
});

promseOne.then(() => {
	console.log("this is the then function");
});

// promseOne();
