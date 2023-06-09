import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const [dogDetails, setDogDetails] = useState(null);



    useEffect(() => {
        const dog = dogs.find((dog) => dog.name.toLowerCase() === name);


        setDogDetails(dog);


    }, [dogs, name]);

    return (
        dogDetails && (
            <div className='dog-details'>

                <img src={dogDetails.src} alt={dogDetails.name} style={{
                    height: '300px',
                    width: '300px'
                }} />
                <p>
                    Name: <b>{dogDetails.name}</b>
                </p>
                <p>
                    Age: <b>{dogDetails.age}</b>
                </p>

                <ul>
                    {dogDetails.facts.map((fact, idx) => {
                        return (
                            <li key={idx}>
                                {fact}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    )



}

export default DogDetails;