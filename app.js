import express from "express";
import employeesRouter from "./api/employees.js";

const app = express();

app.use(express.json());

app.use(employeesRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Something went wrong.");
});

export default app;