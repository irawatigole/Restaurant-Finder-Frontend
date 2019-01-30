import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';
import Menu from './menu'


class AddCart extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/users/cart_items').then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    // addCuisine(newMenu) {
    //     axios.post('http://localhost:3000/users/cart_items', newMenu).then(response  => {
    //         this.props.history.push('/menus')
    //     }).catch(err => {
    //         console.log(err)       
    //     })
    // }
    // onSubmit(e){
    //    const newMenu= {
    //        name: this.refs.name.value,
    //        description: this.refs.description.value,
    //        price: this.refs.price.value,
    //        cuisine: this.refs.cuisine.value

    //    }
    //    e.preventDefault();
    //    this.addCuisine(newMenu);
    // }
    
    render(){
        console.log(this.props.menu)
        return(
           <div>
               <br/>
               <Link to="/menus">Back</Link>
               <h3>Your Cart</h3>
                   <p>{this.props.menu}</p>
               
                   {/* { this.cartItemInfo.name } - { this.cartItemInfo.price } -  */}
                   {/* <button onClick={this.handleDown.bind(this)} disabled={this.state.quantity > 1 ? false : true}> - </button> { this.state.quantity } <button onClick= {this.handleUp.bind(this)}> + </button>  */}
                    {/* { this.state.total }                  */}
           </div>
        )
    }
}

export default AddCart;
