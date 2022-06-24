import express from "express";

//User Express
const app = express();

//Leasen Port
app.listen(8000, () => {
  console.log(`Server connected ${"http://localhost:8000"}`);
});