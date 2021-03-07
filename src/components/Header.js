import React from "react";
const Header = (props) => {
const{ search, onInputChange }=props;
    return(
        <div className="jumbotron">
            <h1 className="display-1">
                <i class="material-icons brand-icon">
                    fastfood
                </i>
                Food Recipe
            </h1>
            <div className="input-group mx-auto w-50 ">
                <input type="text" 
                className="form-control" 
                placeholder="Search Your Recepie..."
                value={search}
                onChange={onInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-dark">Search Recepie</button>
                </div>
            </div>

        </div>
    )
}
export default Header;