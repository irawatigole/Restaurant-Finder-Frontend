import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';


class AddMenu extends React.Component {
    addCuisine(newMenu) {
        axios.post('http://localhost:3000/menus', newMenu).then(response  => {
            this.props.history.push('/menus')
        }).catch(err => {
            console.log(err)       
        })
    }
    onSubmit(e){
       const newMenu= {
           name: this.refs.name.value,
           description: this.refs.description.value,
           price: this.refs.price.value,
           cuisine: this.refs.cuisine.value

       }
       e.preventDefault();
       this.addCuisine(newMenu);
    }
    
    render(){
        return(
            
           <div>
               <br/>
               <Link to="/menus">Back</Link>
               <h3>Add Cuisines</h3>
               <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" ref="name"/><br/>
                    <label htmlFor="name">Description</label>
                    <input type="textarea" name="description" ref="description"/> <br/>
                    <label htmlFor="name">Price</label>
                    <input type="text" name="price" ref="price"/><br/>
                    <label htmlFor="cuisine"> Cuisine </label>
                    <select name="cuisine" id="cuisine">
                        <option value=""> Select </option>
                        <option value="south indian"> South Indian </option>
                        <option value="chinese"> Chinese </option>
                        <option value="punjabi"> Punjabi </option>
                        <option value="indian traditional"> Indian Traditional </option>
                        <option value="italian"> Italian </option>
                        <option value="thai"> Thai </option>
                    </select> <br/>



                <input type="submit" value="save" className="btn" />
               </form> 
           </div>
        )
    }
}

export default AddMenu;