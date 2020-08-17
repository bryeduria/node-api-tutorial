const express = require("express");
const PORT = 7500;
const NAME = "Bryan";

const app = express();

app.get("/hello", (req, res) => {
  res.json({
    message: `Hello ${NAME}!`,
  });
});

app.get("/other", (req, res) => {
  res.json({
    message: `Another route.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}.`);
});
