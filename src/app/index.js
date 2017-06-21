var React = require('react');
var ReactDOM = require('react-dom');

//Create Component
var TodoComponent = React.createClass({
  render: function(){
    return(
           <h1>Helllllo</h1>
   );
  }
});

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
