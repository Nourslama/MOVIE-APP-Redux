import {editmovie} from '../actions/actions'
import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from "react-redux"
Modal.setAppElement("#root");


class Editmovie extends Component {
constructor (props){
    
super(props)
this.state={
    modalIsOpen:false,
    
        rating:"",
        title:"",
        descripton:"",
        img:""
    
}

}


openModal = () => this.setState({ modalIsOpen: true });
closeModal = () => this.setState({ modalIsOpen: false });
handleChange=e=>{
    this.setState({
          [e.target.name]:(e.target.value)})
    
}
handleClick=()=>{
    this.setState({
        rating:this.props.e.rating,
        title:this.props.e.title,
        descripton:this.props.e.descripton,
        img:this.props.e.img
    })
}



setMovies=(id)=>{
    
let newmovie={
    rating:this.state.rating,
    title:this.state.title,
    descripton:this.state.descripton,
    img:this.state.img
}
   
    this.props.editmovie(id,newmovie);
    
    
   
    
    }
   
    render() {
        return (
            <div>
                   <button onClick={()=>{this.openModal();this.handleClick()}}>Edit</button>
 <Modal isOpen={this.state. modalIsOpen}
        onRequestClose={this.closeModal} className="addModal">
            
          <div className='formModal' >
          <h2>Edit A movie</h2>
         
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
        <button onClick={()=>{this.setMovies(this.props.e.id);this.closeModal()}}>Edit</button>
        <button onClick={this.closeModal}>close</button>
        </div>
        </div>
 </Modal>
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         editmovie: (payload) => {
//             dispatch(editmovie(payload))
//         }
//     }
// }

export default connect(null,{editmovie}) (Editmovie)

