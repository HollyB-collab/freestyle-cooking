
CREATE DATABASE freestyle;

USE freestyle;

CREATE TABLE recipes
(
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  ingredients TEXT[],
  steps TEXT[],
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rnotes
(
  id SERIAL PRIMARY KEY,
  recipes_id INT,
  notes TEXT,
  used_ingredients TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIN KEY (recipe_id)
    REFERENCES recipes(id)
);