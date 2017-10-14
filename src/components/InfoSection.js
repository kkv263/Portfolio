import React from 'react';
import { Progress } from 'reactstrap';
import '../css/InfoSection.css';
class InfoSection extends React.Component {
    render() {
      return (
        <div>
        <div id="slide1"></div>
           <div id="grey1">
               <h1 className="slideheader">e d u c a t i o n</h1>
               <div className="slideinfo"> 
                  <p>University of Texas at Austin</p>
                  <p>Bachelor of Science and Arts</p>
                  <p>Computer Science</p>
                  <p>May 2018</p>
              </div>
              <div className="slideinfo">
                <p>J.F. Oberlin University - <span>桜美林⼤学</span></p>
                <p>Exchange Semester</p>
                <p>Machida, Japan</p>
                <p>Spring 2017</p>
              </div>
          </div>

       <div id="slide2"></div>
       <div id="grey1">
           <h1 className="slideheader">k n o w l e d g e</h1>
               <div className="slideinfo"> 
                 <ul>
                 <li>Python</li>  
                 <li>Python</li>  
                 <li>Python</li>  
                 </ul> 
               </div> 
       </div>
       </div>
      )
    }
  };
  
  export default InfoSection; 
