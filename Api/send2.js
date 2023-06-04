const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/api/demo", (req, res) => {
  const options = {
    hostname: "example.com",
    port: 443,
    path: "/",
    method: "GET",
  };

  const req = https.request(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      res.status(response.statusCode).send(data);
    });
  });

  req.on("error", (error) => {
    console.error(error);
    res.status(500).send("Error occurred");
  });

  req.end();
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
