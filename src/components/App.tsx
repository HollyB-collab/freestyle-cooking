import * as React from "react";
import Header from "./Header";
import Library from "./Library";
import Recipe from "./Recipe";
import NewRecipe from "./NewRecipe";
import MakeRecipe from "./MakeRecipe";


const App = () => {

  return (
    <div>
      <Header />
      <Library />
      <Recipe />
      <NewRecipe />
      <MakeRecipe />

    </div>

  );
}

export default App;