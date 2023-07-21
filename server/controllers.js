const db = require("./connection.js");

module.exports = {
  readAll: async (req, res) => {
    const qryStr = `SELECT * FROM recepies ORDER BY last_update ASC`;
    try {
      const client = await db.pool.connect();
      const recipes = await client.query(qryStr);
      client.release();
      res.status(200).send(recipes);
    } catch (err) {
      console.log(err);
    }
  },

  addRnotes: async (req, res) => {
    const qryStr = `PREPARE rnotesplan (int, text, text[]) AS
      INSERT INTO rnotes(recepie_id, notes, used_ingredients)
      VALUES($1, $2, $3)`;
    const execute = `EXECUTE rnotesplan(${req.data.recepie_id}, ${req.data.notes}, ${req.data.used_ingredients})`;
    try {
      const client = await db.pool.connect();
      const recipes = await client.query(qryStr, execute);
      client.release();
      res.status(201).send(recipes);
    } catch (err) {
      console.log(err);
    }
  },

  addRecipe: async (req, res) => {
    const qryStr = `PREPARE newrecipeplan (text, text, text[], text[]) AS
      INSERT INTO recipes(name, description, ingredients, steps)
      VALUES($1, $2, $3, $4)`;
    const execute = `EXECUTE newrecipeplan(${req.data.name}, ${req.data.description}, ${req.data.ingredients}, ${req.data.steps})`;
    try {
      const client = await db.pool.connect();
      const response = await client.query(qryStr, execute);
      client.release();
      res.status(201).send(response);
    } catch (err) {
      console.log(err);
    }
  },

  viewRecipe: async (req, res) => {
    const qryStr = `UPDATE recipes SET last_update = CURRENT_TIMESTAMP WHERE id = ${req.params.recipe_id}`;
    try {
      const client = await db.pool.connect();
      const response = await client.query(qryStr);
      client.release();
      res.status(201).send(response);
    } catch (err) {
      console.log(err);
    }
  },
};
