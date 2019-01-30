import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios'

class CuisineDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            // item: props.item
            details: ''
        }
    }
    // componentWillMount(){
    //     this.getCuisine()
    // }
    // getCuisine(){
        componentDidMount(){
        let cuisineId = this.props.match.params.id;
        axios.get(`http://localhost:3000/cuisines/${cuisineId}`).then(response => {
            this.setState({
                details: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
    // }
    onDelete() {     
        let cuisineId = this.state.details._id;
        axios.delete(`http://localhost:3000/cuisines/${cuisineId}`).then(response => {
            this.props.history.push('/cuisines')     
        }).catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
           <div>
               <br/>
               <Link to="/cuisines">Back</Link>
               <h1>{this.state.details.name}</h1>
               <ul>
                   <li><Link to={`/cuisines/${this.state.details._id}/menus`}>Name: {this.state.details.name} </Link></li>       
               </ul>
               <Link to={`/cuisines/edit/${this.state.details._id}`}>Edit</Link>
               <button onClick={this.onDelete.bind(this)}>Delete</button>
           </div>
        )
    }
}

export default CuisineDetails;