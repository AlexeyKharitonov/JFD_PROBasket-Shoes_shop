const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const chalk = require("chalk");
const initDataBase = require("./startUp/initDataBase");
const routes = require("./routes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;
// if (process.env.NODE_ENV === "production") {
//   console.log("Production");
// } else {
//   console.log("Development");
// }д

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDataBase();
    });
    await mongoose.connect(config.get("mongoUri"));
    console.log(chalk.bgGreen.bold(`MongoDB connected`));
    app.listen(8080, () =>
      console.log(
        chalk.bgGreen.bold(`Server has been started on port ${PORT}...`)
      )
    );
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

start();
