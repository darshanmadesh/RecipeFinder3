const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
//Import routes
const recipeRoutes = require("./routes/recipe");

//App
const app = express();
//Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//Route
app.use("/api", recipeRoutes);

//Port and listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port}`));
