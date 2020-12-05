const express = require("express");

const router = express.Router();

//Import controller methods
const { create } = require("../contollers/recipe");

router.post("/recipe", create);

module.exports = router;
