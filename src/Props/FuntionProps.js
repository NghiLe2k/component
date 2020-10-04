import React from 'react'

//cach nhan du lieu tu props

export default function FuntionProps(p) {
    // console.log(props)
    return (
        <div>
            <h3>funtion Props</h3>
            <p>type:{p.loaiCho}</p>
            <img src={p.hinhCho} alt = "hinhdep"/>
        </div>
    )
}
