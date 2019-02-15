import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';

class OrderDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/orders').then(response  => {
            this.setState({orders : response.data})           
         }).catch(err => {
             console.log(err)       
         })
    }

    
    render(){
        return (
            
            <div>
                <h3>Your orders</h3> 
                 <ul className="collection-item">

                    { this.state.orders.map((order,index) => <li key={index}>  {order.orderItems.map((item,i) => <li key={i}>{item.name}- {item.price}</li>)}<b>Total: </b> {order.total}   
                    </li>)} 
                </ul>
               <button>Proceed to buy</button>
            
            </div>
        )
    }
}

export default OrderDetails;