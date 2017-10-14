import React from 'react';
import { Row, Col } from 'reactstrap';
import '../css/Projects.css';
class Projects extends React.Component {
    render() {
      return (
        <div>
          <div >
            <Row className="black">
              <Col xs = "12" lg="6">
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
              <Col  xs = "12" lg="6">
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
            </Row>
            <Row className="black">
              <Col xs = "12" lg="6">
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
              <Col  xs = "12" lg="6">
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
            </Row>
          </div>
        </div>
      )
    }
  };
  
  export default Projects; 
