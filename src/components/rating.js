import React from 'react'

export default function rating(props) {
    const {rate,onChangeRating= () => {}}=props
        let starArray = [];
    for(let i = 1;i<= 5;i++) {
        if(i<=rate)
       starArray.push (<i key={i} className="fas fa-star star-gold" onClick={() => onChangeRating(i)} ></i>)
   else
        starArray.push (<i key={i} className="far fa-star" onClick={() => onChangeRating(i-1)}></i>)
 }
    
    return (
        <div>
             {starArray}
          
        </div>
    )
}
