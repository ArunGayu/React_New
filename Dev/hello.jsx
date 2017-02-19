import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>Hello,  {this.props.greetTarget}  !</h1>
    );
  }
});
 
ReactDOM.render(
   <div>
    <HelloWorld greetTarget="Super Man"/>
    <HelloWorld greetTarget="Spider Man"/>
    <HelloWorld greetTarget="Bat Man"/>
    <HelloWorld greetTarget="Test"/>
    <HelloWorld greetTarget="Tiger"/>
    </div>,
  document.getElementById("container")
);    