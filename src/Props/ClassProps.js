import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>funtion Props</h3>
                <p>type:{this.props.typeDogs}</p>
                <img src={this.props.imgDog} alt = "hinhdep"/>
            </div>
        )
    }
}
