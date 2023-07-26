import * as React from "react";
import { recipeType } from "../assets/types";

const MakeRecipe = (props:{recipe: recipeType}) => {

  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row"></div>
 <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" style={{width: "100%", height: "225px", display: "block", objectFit: "cover" }} src={props.recipe.photo_url} alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-text">{props.recipe.description}</p>

                    {props.recipe.ingredients.map((ingredient) => {
                      return(
                        <>
                        <input type="checkbox" name={ingredient} value={ingredient}></input>
                        <label style={{padding: "5px"}}>  {  ingredient}</label>
                        <br/>
                        </>
                      )
                    })}

                  <ul>
                    { props.recipe.steps.map((step) => {
                      return(
                        <li>{step}</li>
                      )
                    })}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                  <textarea placeholder="notes"></textarea>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Remember</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Back</button>
                    </div>
                    <small className="text-muted">{props.recipe.time_to_make}</small>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>

    </div>
  )
}
export default MakeRecipe;