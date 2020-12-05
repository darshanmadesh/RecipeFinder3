const express = require("express");

const router = express.Router();

//Import controller methods
const { create } = require("../contollers/recipe");

router.get("/recipe", create);

module.exports = router;
