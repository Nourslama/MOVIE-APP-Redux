import { ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE } from "../constants/actiontypes"
import {movies} from '../components/data';

const InitialState = {
    movies,
    // isComplete:false,
   
}
const moviereducer= (state =InitialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
           
        return {
            ...state,movies:[...state.movies,{...action.payload,id:Math.random()}]
        }
        case DELETE_MOVIE:
           
            return {
                ...state,movies:[...state.movies.filter((el,i)=>i!==action.payload)]
            }
            case EDIT_MOVIE:
           
                return {
                    ...state,movies:state.movies.map((el, i) =>el.id === action.payloadid ? {...action.payload} : el )
                }
        default:
            return state
    }
}
export default moviereducer