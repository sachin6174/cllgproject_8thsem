const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/api/demo", (req, res) => {

  const demoData = {
    message: "Hello, World!",
    timestamp: new Date().toISOString(),

    config: {
      logo: {
        type: "image",
        src: "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        alt: "Swiggy Logo",
        style: {
          width: "200px",
          height: "auto",
        },
      },
      header: {
        type: "heading",
        text: "Welcome to Swiggy",
        size: "large",
      },
      search: {
        type: "input",
        placeholder: "Enter your location",
      },
      categories: {
        type: "menu",
        items: ["Pizza", "Burger", "Sushi", "Indian", "Chinese"],
      },
      restaurants: [
        {
          name: "Pizza Paradise",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Pizza",
          rating: 4.5,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
        {
          name: "Burger Haven",
          image:
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
          cuisine: "Burger",
          rating: 4.2,
        },
      ],
    },
  };

//  console.log("sachin->req", req)
  https
    .get("https://github.com",(response) => {
      console.log("sachin->req", response);
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
           console.log(chunk);
        });
        response.on("end", () => {
          // console.log(data)
          res.send(demoData);
        });
      }
    )
    .on("error", (error) => {
      console.error(error);
      res.status(500).send("Error occurred");
    });
  // res.json(demoData);
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
