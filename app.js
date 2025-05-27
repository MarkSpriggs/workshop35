import express from "express";
const app = express();
export default app;
import employeesRouter from "./api/employees.js"

app.use(express.json());

// TODO: this file!

app.use("/employees", employeesRouter)

app.use((err, req, res, next)=>{
console.error(err);
res.status(500).send("Sorry! Something went wrong")
});

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});
