import {addmovie} from '../actions/actions'
import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from "react-redux"
Modal.setAppElement("#root");
class modal extends Component {
constructor (props){
    
super(props)
this.state={
    modalIsOpen:false,
    addMovie:[{
        rating:1,
        title:"",
        descripton:"",
        img:""
    }]
}

}
openModal = () => this.setState({ modalIsOpen: true });
closeModal = () => this.setState({ modalIsOpen: false });
handleChange=e=>{
    this.setState({
        addMovie:{... this.state.addMovie,[e.target.name]:(e.target.value)}
    })
}

addMovies=(e)=>{
    e.preventDefault();

    if (Object.values(this.state.addMovie).indexOf("") === -1) 
    {
    this.props.addmovie(this.state.addMovie);
    
    
    this.setState({
        modalIsOpen: false,
        addMovie: {
            rating: 1,
            title: "",
          descripton: "",
          img: ""
          
        }
      })
    }else alert("veuillez remplir tout les champs");
    }
   
    render() {
        return (
            <div>
                    <p className="ajout" ><i class="fas fa-plus fa-5x" onClick={this.openModal} ></i></p>
 <Modal isOpen={this.state. modalIsOpen}
        onRequestClose={this.closeModal} className="addModal">
            
          <form onSubmit={this.addMovies} className='formModal' >
          <h2>Add a Movie</h2>
         
            <label >Movie Name</label>
            <input value={this.state.title}type="text" name="title" placeholder="title..."onChange={this.handleChange} />
            <label>Movie Rate</label>
            <select value={this.state.rating} name="rating" onChange={this.handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <label>Movie description</label>
            <textarea  value={this.state.descripton}type="text" name="descripton" placeholder="description..." onChange={this.handleChange}/>
            <label>Movie Image</label>
            <input value={this.state.img} type="url" name="img" placeholder="URL..." onChange={this.handleChange} />
            
    <div className="btn">
        <button  >add</button>
        <button onClick={this.closeModal}>close</button>
        </div>
        </form>
 </Modal>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addmovie: (payload) => {
            dispatch(addmovie(payload))
        }
    }
}

export default connect(null,mapDispatchToProps) (modal)

