import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import NasaCard from "../NasaCard/NasaCard";

function NasaImg(){
    const [pics, setPic] = useState([]);

    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                console.log(response);
                const pics = response.data;
                setPic(pics)
            })
            .catch(error => {
                console.log("Broken Data", error)
            })
    }, []);

    return(
        <div className='nasa-photo'>
            <NasaCard
            title={pics.title}
            picture={pics.url}
            date={pics.date}
            description={pics.explanation}
            />
        </div>
    )
}

export default NasaImg