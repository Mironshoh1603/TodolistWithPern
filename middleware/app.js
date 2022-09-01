const express = require("express");
const app = express();

const userRoutes = require("../routes/user");
const todoRoutes = require("../routes/todos");
const viewRoutes = require("../routes/viewRouter");

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json());

app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/todos/", todoRoutes);
app.use("/", viewRoutes);

module.exports = app;
