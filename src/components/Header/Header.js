import React from 'react';


class Header extends React.Component {
  render(){
      const headerStyle = {
        padding:".66rem 0",
        textAlign:"center",
        backgroundColor: "goldenrod",
        fontFamily:"Poppins,sans-serif",
        fontSize:"1.8em",
        color:"#fff"

      }
    return(
        <h1 style={headerStyle}>{this.props.children}</h1>
    )
  }
};

export default Header;
