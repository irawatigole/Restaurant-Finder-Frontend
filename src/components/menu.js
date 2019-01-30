import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cuisine from './cuisine';
import AddCart from './addCart';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
        // menus: props.item,
            menus: '',
            isLoaded: false       
        }
    }
    componentDidMount() { 
        let cuisineId = this.props.match.params.id;
        axios.get(`http://localhost:3000/cuisines/${cuisineId}/menus`).then((response) => {
        this.setState({ menus:response.data,isLoaded: true }) 
        }).catch((err) => {
        console.log(err)
        })
    }

    menusList(){
        return (
            <div>
                <Link to="/cuisines">Back</Link>
                <ul className="collection-item">
                    { this.state.menus.map((menu,index) => <li key={index}  menu={menu}> <b>{menu.name} Rs   {menu.price}</b> <br/> {menu.description} 
                    <Link to="/users/cart_items">Add to cart</Link> 
                    <br/><img src={menu.imageUrl} alt={menu.name}></img> </li>)}     
                   
                    {/* <Route path="/cuisines/:id/menus" component={this.ChildCuisine.bind(this)}/>    */}
                </ul>
                
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>Menus</h1>
                {this.state.isLoaded ? this.menusList() : <img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.gif" />}             
                {/* <div className="fixed-action-btn">
                <Link to="/menus/add" className="btn-floating-btn-large red"></Link>
                <button>Add menu</button> */}
                   <Link to="/menus/add">Add menu</Link>
                {/* </div>        */}
             </div>
        )
    }
}

export default Menu;