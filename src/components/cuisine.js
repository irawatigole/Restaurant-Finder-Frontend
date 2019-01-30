import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Menu from './menu';
import Navbar from './layout/navbar'
import Footer from './layout/footer'

class Cuisine extends Component {
    constructor(props){
        super(props)
        this.state = {
            cuisines: [],
            isLoaded: false,
            filteredCuisines: []
        }
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:3000/cuisines').then((response) => {
        this.setState({ cuisines:response.data,isLoaded: true }) 
        }).catch((err) => {
        console.log(err)
        })
    }

    cuisinesList(){
        return (
            <div>
                <ul className="collection-item">
                    { this.state.cuisines.map((cuisine,index) => <li key={index}> <Link to={`/cuisines/${cuisine._id}`} item={cuisine}>{cuisine.name}</Link> 
                    {/* <button onClick={this.handleDelete} data-id={cuisine._id} > Delete </button><button onClick={this.handleEdit} data-id={cuisine._id} > Edit </button>  */}
                    </li>)}     
                    {/* <Route path="/cuisines/:id/menus" component={this.ChildCuisine.bind(this)}/>    */}
                </ul>
                
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>Cuisines</h1>
                {/* <Navbar /> */}
                {this.state.isLoaded ? this.cuisinesList() : <img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.gif" alt="loading" />}             
                {/* <div className="fixed-action-btn">
                <Link to="/cuisines/add" className="btn-floating-btn-large red"></Link>
                <button>Add cuisine</button> */}
                <Link to="/cuisines/add">Add cuisine</Link>
                {/* </div>        */}
             </div>
        )
    }
}

export default Cuisine;