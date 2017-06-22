var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
//Module require
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

//Create Component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['shower','eat','take a nap','go to meet up']
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return(
          <TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));
    return(
      <div id='todo-list'>
          <p> The busiest people have the most leisure...</p>
          <ul>
            {todos}
          <AddItem onAdd={this.onAdd}/>
          </ul>
      </div>
   );
  },//render

  //custom functions
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  },
  //lifecycle Functions
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentDidMount: function(){
    console.log('componentDidMount');
  },
  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  }
});

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
