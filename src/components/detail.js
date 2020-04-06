import React from 'react'
import Rating from './rating'
import{connect}from 'react-redux'
import {Link } from "react-router-dom";




 function details(props) {

    


    return (
        <div className="center">
           {props.movies.map((el,i ) =>el.id === Number(props.match.params.id)&&
           <div>
               <h1>{el.title}</h1>
                <Rating rate={el.rating}/>
                <img src={el.img}/>

               <p>{el.descripton}</p>
               <Link to={`/`}> 
               <button >Back</button>
               </Link>
                
                </div>
           )} 
        </div>
    )
}

const mapStateToProps = state => {
    return{
        movies:state.movies
    }
}

export default  connect(mapStateToProps)(details)  

