export type recipeListType = recipeType[];

export type recipeType = {
  "description": string;
  "id": number;
  "ingredients": string[];
  "last_update": string;
  "name": string;
  "steps": string[];
  "photo_url": string;
  "time_to_make": string;
};