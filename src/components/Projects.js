import React from 'react';
import { Row, Col } from 'reactstrap';
import '../css/Projects.css';
class Projects extends React.Component {
    render() {
      return (
        <div>
          <div className="black">
            <h1>projects</h1>
            <Row >
              <Col xs = {{ size: 11, offset:1 }} md={{ size:5, offset:1 }}>
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
              <Col xs = {{ size: 11, }} md={{ size:5 }}>
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
            </Row>
            <Row >
              <Col xs = {{ size: 11, offset:1 }} md={{ size:5, offset:1 }}>
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
              <Col xs = {{ size: 11, }} md={{ size:5 }}>
                <img className="block" src="https://dummyimage.com/hd1080"/>
              </Col>
            </Row>
          </div>
        </div>
      )
    }
  };
  
  export default Projects; 
