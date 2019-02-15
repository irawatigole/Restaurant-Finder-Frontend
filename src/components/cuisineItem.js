
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';

class CuisineItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            details : ''
        }
      
    } 
    onDelete(id) {        
        axios.delete(`http://localhost:3000/cuisines/${id}`).then(response => {  
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <ul className="collection-item">
                { this.props.items.map((cuisine,index) => <li key={index}> <Link to={`/cuisines/${cuisine._id}/menus`} >{cuisine.name}</Link>   <Link to={`/cuisines/edit/${cuisine._id}`}>Edit</Link>
                <button onClick={this.onDelete.bind(this,cuisine._id)}>Delete</button> 
                
                    </li>)} 
                </ul>
              
        
            
            </div>
        )
    }
}

export default CuisineItem;