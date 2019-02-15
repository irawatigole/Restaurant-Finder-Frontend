import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CuisineItem from './cuisineItem';


class Cuisine extends React.Component {
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
        let name = this.props.match.params.name
        axios.get(`http://localhost:3000/restaurants/${name}/cuisines`).then((response) => {
        this.setState({ cuisines:response.data,isLoaded: true }) 
        }).catch((err) => {
        console.log(err)
        })
    }

    cuisinesList(){
        return (
            <div>
                <ul className="collection-item">
                <CuisineItem items={this.state.cuisines}/>
                    {/* { this.state.cuisines.map((cuisine,index) => <li key={index}> <Link to={`/cuisines/${cuisine._id}`} item={cuisine}>{cuisine.name}</Link>  */}
                 
                    {/* </li>)}      */}
                    
                </ul> 
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>Cuisines</h1>
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