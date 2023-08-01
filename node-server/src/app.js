const express = require("express");
const EventEmitter = require("events");

const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 9000;
const app = express();

// Middleware to parse JSON body requests.
app.use(express.json());
app.use(cors({ origin: "*" }));

// Connect to the MongoDB database
mongoose
  .connect("mongodb://localhost:27017/Lab_App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.get("/", (req, res) => {
  return res.json("Hello");
});
const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent", (data) => {
  console.log(data);
});

console.log("Statement A");
eventEmitter.emit("myEvent", "Statement B");
console.log("Statement C");

app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Listening At Port ${PORT}`);
});
