/**
 * các buoc thuc hien
 * 1. dan layout
 * 2.xat dinh nhung du lieu thay doi và luu vao trong state
 * 3.lay data trong state binding ra jsx
 * 4.bat su kien cho cac nut chon mau
 * 5.cap nhat lai gia tri trong state
 */
import React, { Component } from 'react'

export default class index extends Component {
    state = {
        imgCar : "./img/car/products/black-car.jpg",
    };
    handleChangeColor =(imgCar) =>{
        console.log(imgCar);
        //cap nhat
        //object literal
        this.setState({
            imgCar,
        })
    }
    render() {
        return (
            <div>
                <section className="show-room">
                    <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
                    <div className="container">
                        <div className="chose__color d-flex justify-content-around">
                            <button className="btn" onClick={()=>this.handleChangeColor("./img/car/products/black-car.jpg")}><img src="./img/car/icons/icon-black.jpg" alt="hinh" style={{ width: 50 }} />
                            </button>
                            <button className="btn" onClick={()=>this.handleChangeColor("./img/car/products/red-car.jpg")}><img src="./img/car/icons/icon-red.jpg" alt="hinh" style={{ width: 50 }} />
                            </button><button className="btn" onClick={()=>this.handleChangeColor("./img/car/products/silver-car.jpg")}><img src="./img/car/icons/icon-silver.jpg" alt="hinh" style={{ width: 50 }} />
                            </button>
                            <button className="btn" onClick={()=>this.handleChangeColor("./img/car/products/steel-car.jpg")}><img src="./img/car/icons/icon-steel.jpg" alt="hinh" style={{ width: 50 }} />
                            </button>
                            </div>
                        <div className="car mt-2"><img className="img-thumbnail" src={this.state.imgCar} alt="hinh" /></div>
                    </div>
                </section>
            </div>
        )
    }
}
