import React from 'react';

const DogList = ({ dogs }) => {
    return (
        <>
            {dogs.map((d, idx) => {
                return (
                    <div className='dog-details' key={idx}>
                        <p>
                            Name: <b>{d.name}</b>
                        </p>
                        <p>
                           Age: <b>{d.age}</b>
                        </p>
                        <ul>
                            {d.facts.map((fact, idx) => {
                                return (
                                    <li key={idx}>
                                        {fact}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </>

    )
}

export default DogList;