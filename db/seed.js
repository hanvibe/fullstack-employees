import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();

await seedEmployees();

await db.end();

console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({
    name: "John Smith",
    birthday: "1990-05-10",
    salary: 60000,
  });

  await createEmployee({
    name: "Jane Doe",
    birthday: "1992-08-21",
    salary: 65000,
  });

  await createEmployee({
    name: "Michael Johnson",
    birthday: "1988-01-15",
    salary: 72000,
  });

  await createEmployee({
    name: "Emily Davis",
    birthday: "1995-03-12",
    salary: 58000,
  });

  await createEmployee({
    name: "David Wilson",
    birthday: "1987-11-30",
    salary: 81000,
  });

  await createEmployee({
    name: "Sarah Brown",
    birthday: "1994-09-18",
    salary: 63000,
  });

  await createEmployee({
    name: "Chris Miller",
    birthday: "1991-07-25",
    salary: 69000,
  });

  await createEmployee({
    name: "Jessica Taylor",
    birthday: "1993-04-08",
    salary: 67000,
  });

  await createEmployee({
    name: "Daniel Anderson",
    birthday: "1989-12-02",
    salary: 75000,
  });

  await createEmployee({
    name: "Olivia Thomas",
    birthday: "1996-06-14",
    salary: 62000,
  });
}