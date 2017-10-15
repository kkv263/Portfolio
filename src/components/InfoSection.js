import React from 'react';
import '../css/InfoSection.css';
class InfoSection extends React.Component {
    render() {
      return (
        <div className="infoSection">
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
        <div id="slide1"></div>


        {/* Last slide should have img tag otherwise use background img in css */}
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
       <div id="slide2">
         <img src ="http://www.standardlife.co.uk/c1/news-and-blog/wp-content/uploads/2016/09/thumbnail-7ffc6892d96921be17a19ced00a632d5.jpeg"/>
       </div>
       
       </div>
      )
    }
  };
  
  export default InfoSection; 
