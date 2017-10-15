import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../css/Footer.css';
class Footer extends React.Component {
    render() {
      return (
        <div>
          <div className="footer-container">
            <div className="fline"></div>
              <Nav className="justify-content-center">
                <NavItem>
                  <NavLink href="https://github.com/kkv263">
                    <img id="icon32" className="iconpadding"  src={require("../assets/icons/git32px.png")}/>
                  </NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink href="mailto:kkv263@utexas.edu" target="_top"> 
                    <img id="icon32" className="iconpadding"src={require("../assets/icons/envelope.png")}/>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >
                    <img id="inIcon" className="iconpadding" src={require("../assets/icons/in-34px.png")}/>
                  </NavLink>
                </NavItem> 
            </Nav> 
          </div>
        </div>
      )
    }
  };
  
  export default Footer; 
