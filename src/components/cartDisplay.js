import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';

class CartDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cartItems : []
        }
        // this.routeChange = this.routeChange.bind(this);
    }
    

    componentDidMount() {
        axios.get('http://localhost:3000/users/cart_items').then(response  => {
            this.setState({cartItems : response.data})           
         }).catch(err => {
             console.log(err)       
         })
    }
    editCart(newCart){
        let cartId = this.state.cartItems[0]._id;
        axios.put(`http://localhost:3000/users/cart_items/${cartId}`, newCart).then(response  => {
            console.log(response.data)
        }).catch(err => {
            console.log(err);       
        })
    }
    onChange(e){
        const newCart = {
            quantity: e.target.value
        }
        this.editCart(newCart);
        e.preventDefault();
     }
     onClick(e){
        let cartId = this.state.cartItems[0]._id;
        axios.delete(`http://localhost:3000/users/cart_items/${cartId}`).then(response  => {
            console.log(response.data)
            this.props.history.push('/restaurants')
        }).catch(err => {
            console.log(err);       
        })
     }
     addOrder(newOrder) {
        axios.post('http://localhost:3000/orders', newOrder).then(response  => {
           console.log(response.data)
           
        }).catch(err => {
            console.log(err)       
        })
    }
    //  routeChange(){
    //     let path = `/orders`;
    //     this.props.history.push(path);
    //     }
     handleClick(){
        let id = localStorage.getItem('id')
        const newOrder= {
            id: id,
            price: this.state.cartItems[0].price
        }
        // e.preventDefault();
        this.addOrder(newOrder);
        console.log(newOrder)
   } 
    render(){
        return (
            <div>
                <h3>Shopping cart</h3>
                <h4> Cart Items {this.state.cartItems.length} </h4>
                 <ul className="collection-item">
                    { this.state.cartItems.map((cartItem,index) => <li key={index}> {cartItem._id}-{cartItem.price}
                    <select value={this.state.value} onChange={this.onChange.bind(this)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select> <button onClick={this.onClick.bind(this)}> x Delete cart item</button>
                   
                    </li>)}     
                    
                </ul>
                {/* <button onClick={this.routeChange}>Place your order</button> */}
                <Link to="/orders" onClick={this.handleClick.bind(this)}>Place yout order</Link> 
            
            </div>
        )
    }
}

export default CartDisplay;