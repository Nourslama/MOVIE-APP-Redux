import React from "react";
import Rating from "./rating"
import AddMovie from './modal'

function search(props) {
    return (
        <div className="search-container">
                 <input type="text" placeholder="recherche..." className="search-box"   onChange={e => props.handleChange(e.target.value)} ></input>
                 <span><Rating rate={props.stars} onChangeRating={props.handleRating}/></span>
                  
                 
                 
                    </div>
                   
                )
}
export default search;
