import React from 'react';


const NasaCard = props => {
    return(
        <div className='img-list' key={props.id}>
            <h1>Title: {props.title}</h1>
            <img src={props.picture} alt='Random photo of Nasa'/>
            <p>Date: {props.date}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default NasaCard