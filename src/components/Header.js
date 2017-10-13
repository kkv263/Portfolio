import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../css/Header.css';
class Header extends React.Component {
    render() {
      return (
        <div>
         <Nav className = "navlist justify-content-around">
          <NavItem>
            <NavLink className="fonttest">about</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fonttest">projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fonttest">contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fonttest">resume</NavLink>
          </NavItem>
        </Nav> 
          <img className="test1"src="http://ahdzbook.com/data/out/31/hdwp695404367.jpg"/>
        </div>
      )
    }
  };
  
  export default Header; 
