import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FuntionProps from './FuntionProps'

export default class DemoProps extends Component {
    type = "husky"
    image = "https://image.plo.vn/w653/Uploaded/2020/xqeioxmrke/2020_02_14/thitchodd_rizf.jpg"
    render() {
        return (
            <div>
                <h2>Props</h2>
                {/* //dung đe truyen du lieu giua cac componets,props là thuoc tính của thẻ */}

                {/* cach truyen du lieu  */}
                <FuntionProps loaiCho = {this.type }hinhCho = {this.image}/>
                <ClassProps typeDogs = {this.type}
                imgDog = {this.image}/>
            </div>
        )
    }
}
