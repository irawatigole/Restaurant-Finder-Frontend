import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCuisine } from '../actions/cuisineActions';

class AddCuisine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            restaurant: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    // addCuisine(newCuisine) {
    //     axios.post('http://localhost:3000/cuisines', newCuisine).then(response  => {
    //         // this.props.history.push('/cuisines')
    //         console.log(response.data)
    //     }).catch(err => {
    //         console.log(err)       
    //     })
    // }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    
    onSubmit(e){
       const newCuisine = {
           name: this.refs.name.value,
           restaurant: this.refs.restaurant.value         
       }
       e.preventDefault();
       this.props.addCuisine(newCuisine);
       console.log(newCuisine)
    }
    
    render(){
            const { errors } = this.state;
        return(
            
           <div>
               <br/>
               
               <h3>Add Cuisines</h3>
               <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" ref="name"/><br/>
                    <label htmlFor="restaurant">Restaurant</label>
                    <input type="text" name="restaurant" ref="restaurant"  />     
                <input type="submit" value="save" className="btn" />
               </form> 
           </div>
        )
    }
}

// export default AddCuisine;
AddCuisine.propTypes = {
    addCuisine: PropTypes.func.isRequired,
    cuisine: PropTypes.object.isRequired,
    
  };
  
  const mapStateToProps = state => ({
    cuisine: state.cuisine
  
  });
  
  export default connect(mapStateToProps, { addCuisine })(
    withRouter(AddCuisine)
  );