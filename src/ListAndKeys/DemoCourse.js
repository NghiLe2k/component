import React, { Component } from 'react'

export default class DemoCourse extends Component {
    danhSachKhoaHoc = [
        "ReactJs",
        "NodeJs",
        "VueJs",
    ];
    renderDanhSachKhoaHoc =()=>{
        //thêm key để k bị trùng
        // const danhSachKhoaHocJSX = this.danhSachKhoaHoc.map((course , index )=>{
        //     return <li key = {index}>{course}</li>
            return this.danhSachKhoaHoc.map((course , index )=>{
                return <li key = {index}>{course}</li>
        })
        // return danhSachKhoaHocJSX;
    }

    render() {
        return (
            <div>
                <h2>List and Keys</h2>
                <h3>Danh sách khóa học</h3>
                <ul>
                    {this.renderDanhSachKhoaHoc()}
                </ul>
            </div>
        )
    }
}
