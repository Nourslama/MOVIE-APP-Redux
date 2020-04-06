import React, { Component } from 'react'
import Search from './search'
import {connect} from "react-redux"
import {deletemovie} from '../actions/actions'
import Rating from './rating'
import AddMovie from './modal'
import Edit from './editmovie'
import {Link} from 'react-router-dom'

 class movieList extends Component {
    constructor(props){
        super(props)
        this.state={
           stars:0,
            input:""
        }
    }
    handleChange=(e)=>{
    this.setState({input:e})
}
handleDelete=(id)=>{
if(this.props.deletemovie(id)){alert("movie delete")} else alert("movie n'a pas pu etre supprimer")
}

//rating
handleRating = rate => {

this.setState({
    
    stars: rate 
})}

    render() {
        const Listmovies=this.props.movies.filter((el,i)=>el.title.toUpperCase().includes(this.state.input.toUpperCase().trim())&& el.rating >= this.state.stars)
        return (
            <div>
               <Search handleChange={this.handleChange} stars={this.state.stars} handleRating={this.handleRating}/> 
               <div className="card-flex">
                         {
                           Listmovies.map((el,i)=>
                       <div class="flip-card" key={i}>
                       <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={el.img} alt="alta"/>
                            </div>
                            <div class="flip-card-back">
                            <h1>{el.title}</h1>
                            <Rating rate={el.rating}/>
                            <p>{el.descripton}</p>
                            <div className="flex">
                 <Link to={`/detail/${el.id}`}><button >Details</button> </Link>
                 
                                    <Edit e={el}/>
                           <button style={{backgroundColor:"red"}} onClick={()=>window.confirm("Are you sure you wish to delete this movie?")&& this.props.deletemovie(i)}>Delete</button>
                        
                         
                           </div>
                             </div>
                            
                             </div>
                             
                                </div>
            
                             )}
             <AddMovie/>
            </div>
           
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletemovie: (payload) => {
            dispatch(deletemovie(payload))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (movieList)
