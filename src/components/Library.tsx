import * as React from "react";
import { recipeListType } from "../assets/types";
import RecipeCard from "./RecipeCard";

const Library = (props:{recipeList: recipeListType}) => {

  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            {props.recipeList.map((recipe) => {
              return (
                <RecipeCard recipe={recipe} />
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Library;