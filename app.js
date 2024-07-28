const express = require("express");
const checklist = require("./src/routes/checklist")
const app = express();
const port = 3000;

app.use(express.json());
app.use('/checklist', checklist)

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}...`);
});
