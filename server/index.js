const express = require("express");
// const morgan = require("morgan");
const app = express();
const router = require("./routes.js");
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
const PORT = 3001 || process.env.PORT;

app.get("/healthcheck", (req, res) => {
  res.send("you are connected");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
