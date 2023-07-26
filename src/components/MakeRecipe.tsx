import * as React from "react";
import { recipeType } from "../assets/types";

const MakeRecipe = (props:{}) => {

  return (
    <div>
      <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" style={{width: "100%", height: "225px", display: "block", objectFit: "cover" }} src="" alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-text"></p>
                  <ul>

                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Make</button>
                    </div>
                    <small className="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}
export default MakeRecipe;