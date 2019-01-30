import React  from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
    <div>
        <h3>Spices of Italy</h3>
        <ul>
          <li>
            <Link to="/users/register">Sign up</Link>
          </li>
          <li>
            <Link to="/users/login">Login</Link>
          </li>
          <li>
            <Link to="/users/logout">Logout</Link>
          </li>
        </ul>
    </div>
)
export default Home;