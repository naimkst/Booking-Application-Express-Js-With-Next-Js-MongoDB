import express from "express";
const router = express.Router();

//Register
router.get("/", async (req, res) => {
  res.send("Register");
});

//Login

export default router;
