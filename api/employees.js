import express from "express";
import {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../db/queries/employees.js";

const router = express.Router();

export default router;

router.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

router.get("/employees", async (req, res, next) => {
  try {
    const employees = await getEmployees();
    res.send(employees);
  } catch (error) {
    next(error);
  }
});

router.post("/employees", async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).send("Request body is required.");
    }

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || salary === undefined) {
      return res.status(400).send("Missing required fields.");
    }

    const employee = await createEmployee({
      name,
      birthday,
      salary,
    });

    res.status(201).send(employee);
  } catch (error) {
    next(error);
  }
});


router.get("/employees/:id", async (req, res, next) => {
  try {
    const employee = await getEmployee(req.params.id);

    if (!employee) {
      return res.status(404).send("Employee not found.");
    }

    res.send(employee);
  } catch (error) {
    next(error);
  }
});

router.delete("/employees/:id", async (req, res, next) => {
  try {
    const employee = await deleteEmployee(req.params.id);

    if (!employee) {
      return res.status(404).send("Employee not found.");
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.put("/employees/:id", async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).send("Request body is required.");
    }

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || salary === undefined) {
      return res.status(400).send("Missing required fields.");
    }

    const employee = await updateEmployee({
      id: req.params.id,
      name,
      birthday,
      salary,
    });

    if (!employee) {
      return res.status(404).send("Employee not found.");
    }

    res.status(200).send(employee);
  } catch (error) {
    next(error);
  }
});