const express = require("express");
const app = express();
const port = 3000;

app.get("/api/demo", (req, res) => {
  res.set("Content-Type", "application/json");
  res.set("Custom-Header", "Custom Value");

  const responseData = {
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
  };

  res.send(responseData);
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
