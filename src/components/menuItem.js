import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';
import { Redirect } from 'react-router'


class MenuItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: props.menuInfo.quantity,
            price: props.menuInfo.price,
            total: props.menuInfo.price * props.menuInfo.quantity
        }
    }
    addCart(newCartItem) {
        axios.post('http://localhost:3000/users/cart_items', newCartItem).then(response  => {
           console.log(response.data)
           
        }).catch(err => {
            console.log(err)       
        })
    }
    handleClick(){
        const newCartItem= {
            menu: this.props.menuInfo._id,
            price: this.props.menuInfo.price
        }
        // e.preventDefault();
        this.addCart(newCartItem);
    }
    
    
    render(){
        return (
            
            <div>
                <p>
                  <b>{ this.props.menuInfo.name }</b>   <br/> {this.props.menuInfo.description}  - {this.props.menuInfo.price} 
                     <Link to="/users/cart_items" onClick={this.handleClick.bind(this)}>Add to cart</Link> 
                     {/* <form onSubmit={this.onSubmit.bind(this)}>
                     <input type="submit" value="Add To Cart"  /> */}
                     {/* </form> */}
                    <br/><img src={this.props.menuInfo.imageUrl} alt={this.props.menuInfo.name}></img> 
                </p>
            </div>
        )
    }
}

export default MenuItem;