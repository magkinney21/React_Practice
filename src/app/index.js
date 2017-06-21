var React = require('react');
var ReactDOM = require('react-dom');

//Create Component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return{
      todos: ['shower','eat','take a nap','go to meet up']
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return(
             <li>{item}</li>
      );
    });
    return(
      <div id='todo-list'>
          <p> The busiest people have the most leisure...</p>
          <ul>
            {todos}
          </ul>
      </div>
   );
  }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
