import React, { Component } from 'react'
//state là trang thái của component nó cap nhat duoc giao dien ben ngoai
export default class DemoConditionalAndState extends Component {
     // isLogin là thuộc tính của class 
        // true : đã đăng nhâp => hien ten nguoi dung
        // false chua dang nhap => hien nut login
    state = {
        isLogin : false,
    };
    // isLogin = false;
    handleEvents = ()=>{
        // this.isLogin = true;
        // this.state.isLogin = true;
        this.setState({
            isLogin: true,
        });
    }
    renderLogin = () =>{
        if(this.state.isLogin){
            return <p>Lê trung nghi</p>
        }else{
            return <button onClick={this.handleEvents}>Login</button>
        }
        // return this.isLogin ?  <p>le trung nghi</p> : <button>login</button>
    }
    render() {
        return (
            <div>
                <h2>Conditional and State</h2>
                <div>
                    {this.renderLogin()}
                </div>
            </div>
        )
    }
}
