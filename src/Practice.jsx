import React from 'react'
import './Practice.css';

const Practice = () => {



const getDate = new Date(2024, 1, 1, 19);
const currentTime = getDate.getHours();
let greeting;
const dynamicColor = {
    color: ""
}

    if (currentTime < 12) {
        greeting = "Good Morning!";
        dynamicColor.color = "red";
    }else if (currentTime < 18 ) {
        greeting = "Good Afternoon!";
        dynamicColor.color = "green";
    }else {
        greeting = "Good Evening!"
        dynamicColor.color = "blue";
    }
  return (
    <div><h1 className='heading' style={dynamicColor}>{greeting}</h1></div>
  )
}

export default Practice