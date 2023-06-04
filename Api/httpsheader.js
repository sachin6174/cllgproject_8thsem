const https = require("https");

const options = {
  hostname: "example.com",
  port: 443,
  path: "/",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log("Response Headers:");
  console.log(res.rawHeaders);
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
