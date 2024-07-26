const express = require("express");
const mongoose = require("mongoose");
const myRouter = require("./routes/route.routes");
const app = express();

app.use(express.json());
app.use("/api", myRouter);

mongoose
  .connect("mongodb://localhost:27017/testing")

  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
// app.get("/", (req, res) => {
//   res.send("Hello Developer!");
// });

const port = 3001;
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
