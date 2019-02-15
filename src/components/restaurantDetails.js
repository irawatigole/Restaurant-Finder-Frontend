import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';

class RestaurantDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            details: ''
        }
    }
        componentDidMount(){
        let name = this.props.match.params.name;
        axios.get(`http://localhost:3000/restaurants/${name}`).then(response => {
            this.setState({
                details: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
    
    render(){
        return(
           <div>
               <br/>
               <Link to="/restaurants">Back</Link>
               <h4><Link to={`/restaurants/${this.state.details.name}/cuisines`}>{this.state.details.name}</Link></h4>
                   <b>Name</b> {this.state.details.name} <br/>
                   <b>Description</b> {this.state.details.description} <br/>      
                   <b>Contact Number</b> {this.state.details.contactNumber}
            
               {/* <Link to={`/cuisines/edit/${this.state.details._id}`}>Edit</Link>
               <button onClick={this.onDelete.bind(this)}>Delete</button> */}
           </div>
        )
    }
}

export default RestaurantDetails;


