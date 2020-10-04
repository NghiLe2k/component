import React, { Component } from 'react'

export default class ClassEvent extends Component {
    handleFocus = () =>{
        // alert("da focus roi nha");
        console.log("da focus roi nha");    
    };
    handleFocusParams = (message) =>{
        console.log(message);
    }
    render() {
        return (
            <div>
                <h2>Class Events</h2>
                <input type= "text" placeholder = "focus" onFocus = {this.handleFocus}/>
                <input type= "text" placeholder = "focus" onFocus = {()=>
                    this.handleFocusParams("hello may cu")
                }/>

            </div>
        )
    }
}
