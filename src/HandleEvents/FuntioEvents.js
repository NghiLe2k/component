import React from 'react'

export default function FuntioEvents() {
    const handleClick = () =>{
        alert("click me");
    };
    const handleClickParams = (message) =>{
        alert(message);
    }
    return (
        <div>
            <h2>Funtion Events</h2>
            {/* xử lý sự kiện trong js thuần  */}
            {/* <button onclick="handleClick()">click di</button> */}
            {/* xử lí xự kiện trong react js chu C viet hoa  */}
            <button onClick={handleClick}>click reactjs</button> 
            <button onClick={()=>{handleClickParams("hello nghi dep trai ");    
            }}>click reactjs params</button> 
        </div>
    )
}
