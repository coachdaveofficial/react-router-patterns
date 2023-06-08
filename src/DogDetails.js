import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

const DogDetails = () => {
    const {name} = useParams();
    const [dog, setDog] = useState(null);

    
}

export default DogDetails