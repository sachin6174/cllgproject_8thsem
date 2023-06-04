// mongodb+srv://sachin:<password>@sachin.7rrss.mongodb.net/
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb+srv://sachin:sachin321@sachin.7rrss.mongodb.net/"; // Replace with your MongoDB server URL

// Database Name
const dbName = "ConfiData"; // Replace with your database name

// Collection Name
const collectionName = "Resturants"; // Replace with your collection name

// Data to be inserted
const data = { name: "John Doe", age: 30 }; // Replace with your data

// Connect to MongoDB server
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error("Error connecting to MongoDB server:", err);
    return;
  }

  console.log("Connected successfully to MongoDB server");

  // Get a reference to the database
  const db = client.db(dbName);

  // Get a reference to the collection
  const collection = db.collection(collectionName);

  // Insert the data
  collection.insertOne(data, function (err, result) {
    if (err) {
      console.error("Error inserting data:", err);
      return;
    }

    console.log("Data inserted successfully");

    // Close the MongoDB connection
    client.close();
  });
});
