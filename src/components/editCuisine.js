import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';


class EditCuisine extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''     
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    // componentWillMount() {
    //     this.getCuisineDetails()
    // }
    componentDidMount() {
    // getCuisineDetails(){
        let cuisineId = this.props.match.params.id;
        axios.get(`http://localhost:3000/cuisines/${cuisineId}`).then(response => {
            this.setState({
                name: response.data.name
            })    
        }).catch(err => {
            console.log(err);
        })
    // }
    }
    editCuisine(newCuisine){
        let cuisineId = this.props.match.params.id;
        axios.put(`http://localhost:3000/cuisines/${cuisineId}`, newCuisine).then(response  => {
            this.props.history.push('/cuisines')
        }).catch(err => {
            console.log(err);       
        })
    }
    onSubmit (e){
        const newCuisine = {
            name: this.refs.name.value,
        }
        this.editCuisine(newCuisine);
        e.preventDefault();
     }
     handleInputChange(e){
         const value = e.target.value;
         const name =  e.target.name;
         this.setState({
             [name]: value
         })
     }
    
    render(){
        return(
           <div>
               <br/>
               <Link to="/cuisines">Back</Link>
               <h1>Edit Meeetup</h1>
               <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange}/>             
                <input type="submit" value="save" className="btn" />
               </form>
               
           </div>
        )
    }
}

export default EditCuisine;