import {ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE} from '../constants/actiontypes'

export function addmovie(newmovie){
    return({
  type:ADD_MOVIE,
  payload:newmovie })
}
export function deletemovie(payload){
    return({
  type:DELETE_MOVIE,
  payload })
}
export function editmovie(payloadid,newmovie){
    return({
  type:EDIT_MOVIE,
  payloadid,
  payload:newmovie})
}