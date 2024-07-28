const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Checklist");
  res.send();
});

router.post("/", (req, res) => {
  console.log(req.body);
  res
    .status(201)
    .send("Tarefa adicionada com sucesso!\n" + JSON.stringify(req.body));
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Tarefa com ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Tarefa PUT com ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Tarefa DELETE com ID ${req.params.id}`);
});

module.exports = router;
