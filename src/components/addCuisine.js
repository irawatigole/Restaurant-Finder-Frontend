import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';


class AddCuisine extends Component {
    addCuisine(newCuisine) {
        axios.post('http://localhost:3000/cuisines', newCuisine).then(response  => {
            this.props.history.push('/cuisines')
        }).catch(err => {
            console.log(err)       
        })
    }
    onSubmit(e){
       const newCuisine = {
           name: this.refs.name.value         
       }
       e.preventDefault();
       this.addCuisine(newCuisine);
    }
    
    render(){
        return(
            
           <div>
               <br/>
               <Link to="/cuisines">Back</Link>
               <h3>Add Cuisines</h3>
               <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" ref="name"/>       
                <input type="submit" value="save" className="btn" />
               </form> 
           </div>
        )
    }
}

export default AddCuisine;