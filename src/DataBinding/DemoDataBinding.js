import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    //thuộc tính của class
    ten = "Lê trung nghị";
    lop = 52;
    renderName = () =>{
        return  <p>Tên: {this.ten}</p>;
    }
    render() {
        //bien1 hình ảnh trong phuong thuc render
        const hinhAnh = "https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg"
        return (
            <div>
                <h2>DataBinding</h2>
                {/* <p>Tên: {this.ten}</p>; */}
                {this.renderName()}
                <p>Lớp: {this.lop}</p>
                <img  src={hinhAnh} alt="hinhanh" />
            </div>
        )
    }
}
