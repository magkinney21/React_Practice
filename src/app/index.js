var React = require('react');
var ReactDOM = require('react-dom');

//Create Component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return{
      todos: ['shower','eat','take a nap']
    }
  },
  render: function(){
    return(
      <div id='todo-list'>
          <p> The busiest people have the most leisure...</p>
          <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
          </ul>
      </div>
   );
  }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
