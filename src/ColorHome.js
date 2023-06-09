import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Color from './Color';
import ColorPicker from './ColorPicker';
import NewColorForm from './NewColorForm';

function ColorHome(props) {

    const [colors, setColors] = useState([...props.colors]);

    const addColor = (color) => {
        let newColor = { ...color };
        setColors([newColor, ...colors]);
    }
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path='/colors/:color'
                    element={<Color />}
                />
                <Route
                    path='/colors/new'
                    element={<NewColorForm add={addColor} />}
                />
                <Route
                    path='/colors'
                    element={<ColorPicker colors={colors} />}
                />
                <Route path="*" element={<Navigate to ="/colors" />}/>


            </Routes>
        </BrowserRouter>
    );
}

ColorHome.defaultProps = {
    colors: [
        {
            name: 'blue',
            color: '0000ff'
        },
        {
            name: 'red',
            color: 'ff0000'
        },
        {
            name: 'green',
            color: '00ff00'
        },
    ]
}


export default ColorHome;
