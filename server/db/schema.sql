
CREATE DATABASE freestyle;

USE freestyle;

CREATE TABLE recipes
(
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  ingredients TEXT[],
  steps TEXT[],
  time_to_make TEXT,
  photo_url TEXT,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rnotes
(
  id SERIAL PRIMARY KEY,
  recipe_id INT,
  notes TEXT,
  used_ingredients TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (recipe_id)
    REFERENCES recipes(id)
);

INSERT INTO recipes(name, description, ingredients, steps, time_to_make, photo_url)
VALUES('Miso Soup', 'Fast and salty soup', ARRAY ['2 packs Ramen Noodles', 'Pinch Dried Seaweed', '¼ tsp Sesame Oil', '1 tsp Bullion', '2 Tbsp Miso Paste', '6 oz Firm Tofu'], ARRAY ['Add 6 cups of water to the pot and set the burner on high.', 'Add Ramen noodles (flavor packages removed), Seaweed, Sesame Oil and Bullion to the pot. Heat until noodles are soft.', 'In individual bowls add half Miso Paste to each bowl and mix with water till paste forms a soup.', 'Slice Tofu and add to individual bowls.', 'When noodles are ready, scoop noodles with broth into bowls.'], '10 minutes', 'https://source.unsplash.com/H5Hj8QV2Tx4');