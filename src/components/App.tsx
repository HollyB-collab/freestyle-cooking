import * as React from "react";
import { useState, useEffect } from "react";
const axios = require("axios").default;
import Library from "./Library";
import Recipe from "./Recipe";
import NewRecipe from "./NewRecipe";
import MakeRecipe from "./MakeRecipe";
import { recipeType } from "../assets/types";


const App = () => {
  const [showLibrary, setShowLibrary] = useState(true);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showNewRecipe, setShowNewRecipe] = useState(false);
  const [showMakeRecipe, setShowMakeRecipe] = useState(false);
  const [recipeToMake, setRecipeToMake] = useState({});
  const [collapsedHeader, setCollapsedHeader] = useState(true);
  const [recipeList, setRecipeList] = useState([]);

  const handleMakeRecipeClick = (value: recipeType) => {
    console.log(value);
    setShowMakeRecipe(true);
    setRecipeToMake(value);
  }

  const handleToggleClick = () => {
    if (collapsedHeader) {
      setCollapsedHeader(false);
      return;
    }
    setCollapsedHeader(true);
  }

  const handleLibraryClick = ()=> {
    setShowLibrary(true);
    setShowRecipe(false);
    setShowNewRecipe(false);
    setShowMakeRecipe(false);

  }

  const handleNewRecipeClick = () => {
    setShowLibrary(false);
    setShowRecipe(false);
    setShowNewRecipe(true);
    setShowMakeRecipe(false);

  }

  useEffect(()=> {
    axios.get("http://127.0.0.1:3001/")
    .then((response)=> {
      setRecipeList(response.data.rows);

    })
    .catch((err)=> {
      console.log(err);
    })
  }, []);

  console.log("second", recipeList);


  return (
    <div>
      <div className={collapsedHeader ? "bg-dark collapse": "bg-dark collapse show"} id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 offset-md-1 py-4">
              <ul className="list-unstyled">
                <li className="text-white" onClick={()=>(handleLibraryClick())}>Library</li>
                <li className="text-white"onClick={()=> {(handleNewRecipeClick())}}>NewRecipe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Freestyle</strong>
          </a>
          <button className="navbar-toggler" type="button" onClick={()=>{handleToggleClick()}}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      {showMakeRecipe && <MakeRecipe /> }
      {showRecipe && <Recipe />}
      {showLibrary && <Library recipeList={recipeList} />}
      {showNewRecipe && <NewRecipe /> }
    </div>

  );
}

export default App;