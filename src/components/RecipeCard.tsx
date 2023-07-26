import * as React from "react";
import { recipeType } from "../assets/types";
import {useState} from "react";

const RecipeCard = (props: {recipe: recipeType}) => {

  const [viewIngredients, setViewIngredients] = useState(false);

  return (
    <div>
      <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" style={{width: "100%", height: "225px", display: "block", objectFit: "cover" }} src={props.recipe.photo_url} alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-text">{props.recipe.description}</p>
                  <ul>
                    {viewIngredients && props.recipe.ingredients.map((ingredient) => {
                      return(
                        <li>{ingredient}</li>
                      )
                    })}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => {setViewIngredients(!viewIngredients)}}>View Ingredients</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" >Make</button>
                    </div>
                    <small className="text-muted">{props.recipe.time_to_make}</small>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}

export default RecipeCard;
//https://source.unsplash.com/H5Hj8QV2Tx4