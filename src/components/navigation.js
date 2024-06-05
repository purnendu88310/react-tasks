import {Outlet,  Link } from "react-router-dom";
import './navigation.css';


export default function Navigation() {
  return (
        <>
          <nav>
            <ul>
              <li className="rcorners2">
                <Link to="/"  style={{ textDecoration: 'none' }} >Search</Link>
              </li>
              <li className="rcorners2">
                <Link to="/product-list"  style={{ textDecoration: 'none' }} >Product List</Link>
              </li>
             
            </ul>
          </nav>
          <Outlet/>
        </>
      );
}
