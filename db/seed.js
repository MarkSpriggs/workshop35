import client from "#db/client";
import { createEmployee } from "./queries/employees.js";

await client.connect();
await seedEmployees();
await client.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({name:"Bob", birthday:"2001-01-01", salary:"80000"})
  await createEmployee({name:"John", birthday:"1995-12-21", salary:"90000"})
  await createEmployee({name:"Mark", birthday:"1998-03-19", salary:"120000"})
  await createEmployee({name:"Anna", birthday:"2000-05-03", salary:"90000"})
  await createEmployee({name:"Kelly", birthday:"1965-06-25", salary:"110000"})
  await createEmployee({name:"William", birthday:"1967-06-18", salary:"150000"})
  await createEmployee({name:"Trey", birthday:"1998-08-17", salary:"120000"})
  await createEmployee({name:"Anthony", birthday:"1998-05-11", salary:"120000"})
  await createEmployee({name:"Lauren", birthday:"2000-10-23", salary:"200000"})
  await createEmployee({name:"Lisa", birthday:"2001-01-02", salary:"120000"})
  
}
