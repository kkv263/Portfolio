import React from 'react';
import AppBar from "material-ui/AppBar";

const style = {
  background:'#333333',
  borderRadius: 3,
  border: 0,
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px',
};

class TopBar extends React.Component {
    render() {
      return (
        <div>
          <AppBar style={style} position="absolute" color="accent">
            Hi
          </AppBar>
        </div>
      )
    }
  };
  
  export default TopBar; 
