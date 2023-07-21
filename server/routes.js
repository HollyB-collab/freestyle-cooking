const controller = require("./controllers.js");
const router = require("express").Router();
//const db = require("./connection.js");

router.get("", controller.readAll);

router.post("/newrecipe", controller.addRecipe);

router.post("/newfreestyle", controller.addRnotes);

router.put("/recipe/:recipe_id", controller.viewRecipe);

module.exports = router;
