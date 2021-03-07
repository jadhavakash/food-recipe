import React from "react";

const Recipes = (props) => {
const {recepies}= props;
    return(
            <div className="row">
               {recepies.map(recipe =>(
                    <div className="col-md-3">
                        <div className="card py-2 text-center">
                            <img src={recipe.recipe.image} className="img-fluid "/>
                            <div className="card-body">
                                <h5>{recipe.recipe.label}</h5>
                            </div>
                        </div>
                    </div>
                 ))} 
            </div>
        
    )
}

export default Recipes;