var React = require('react');
var ReactDOM = require('react-dom');

//Create Component
var TodoComponent = React.createClass({
  render: function(){
    return(
           <div>
            <p><strong>Cheese name:</strong> {this.props.cheese.name}</p>
            <p><strong>Cheese smellFactor:</strong> {this.props.cheese.smellFactor}</p>
            <p><strong>Cheese price:</strong> {this.props.cheese.price}</p>
           </div>
   );
  }
});
var myCheese ={name:"Brie", smellFactor: "Stinky", price:"3.5"};
ReactDOM.render(<TodoComponent mssg="I like cheese" cheese={myCheese}/>, document.getElementById('todo-wrapper'));
