import React from "react";
import ReactDOM from "react-DOM";

var Buttonify = React.createClass({
  render: function() {
    return (
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
});
ReactDOM.render
(
    <div> 
        <Buttonify behavior="Submit">Send Data </Buttonify>
    </div>, 
    document.querySelector("#container")
);