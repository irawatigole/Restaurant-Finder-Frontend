import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';
import $ from "jquery";

class Restaurant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cuisine: '',
            nearByRestaurants : [],
            operation: 'Search',
            restaurants: []
        }
    }

    onChange(e){
        // var $this = this
           this.setState({
               cuisine: e.target.value
           });
       }
       search(e){
        var $this = this
        $this.setState({
            operation: 'Fetching Location..'
        });
        navigator.geolocation.getCurrentPosition(function(position){
            $this.setState({
                operation: 'Fetching Restaurants ..'
            })
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + lng;
            $.ajax({
                url: url,
                type:'GET',
                beforeSend: function(xhr){
                    xhr.setRequestHeader('user-key', '7819c78e0cfa1be2b45743e6362bc3c0')
                },
                success: function(result){
                    $this.setState({
                        nearByRestaurants: result.nearby_restaurants,
                        operation:'Search'    
                    })
                //     console.log(result.nearby_restaurants[0].restaurant.location.address)
                //     console.log(result.nearby_restaurants[0].restaurant.location.city)
                //     console.log(result.nearby_restaurants[0].restaurant.location.zipcode)
                //     console.log(result.nearby_restaurants[0].restaurant.cuisines)
                //     console.log(result.nearby_restaurants[0].restaurant.name)

                   
                //     for (let i= 0; i < result.nearby_restaurants.length; i++){
                //          let restaurantObject = {
                //         name: result.nearby_restaurants[i].restaurant.name,
                //         address: result.nearby_restaurants[i].restaurant.location.address,
                //         'address.city': result.nearby_restaurants[i].restaurant.location.city,
                //         cuisines: result.nearby_restaurants[i].restaurant.cuisines
                //     }
                //     axios.post('http://localhost:3000/restaurants', restaurantObject).then((response) => {
                //         console.log(response.data)
                       
                //     }).catch((err) => {
                //         console.log(err);
                //     })
                // }
            }
            })
        })
    }

       render () {
        return (
            <div className="main-body">
            <div className="outer">
            <div className="inner">
            <br/>
            <h5>Search nearby restaurant </h5>
            <input type="text" placeholder="Get current location" id="cuisine" value={this.state.cuisine} style={{width:400}} onChange={this.onChange.bind(this)}/>
            <input className="button-primary" type="button" value={this.state.operation} onClick={this.search.bind(this)}/>
            <br/>
            <hr/>
            <div>
                {this.state.nearByRestaurants.map(function(restaurantObj, index){
                    var item = restaurantObj.restaurant;
                    return (
                        <div className="row" key={index}>
                        <div className="column column-25">
                        <img src={item.thumb}/>
                        </div>
                        <div className="column">
                        <h3><Link to={`/restaurants/${item.name}`}>{item.name}</Link></h3>
                        <b>Address:</b> {item.location.address}<br/>
                        <b>cuisines: </b> {item.cuisines} <br/>
                        <b>cost for two (approx):</b>{item.currency}{item.average_cost_for_two}<br/>
                        <b>Ratings: <span style={{color:'#' + item.user_rating_color}}>{item.user_rating.aggregate_rating}</span></b>
                        </div>
                        </div>
                    )
                }) }
                </div>
                </div>
             </div>   
     </div>
     )
   }
}

export default Restaurant;