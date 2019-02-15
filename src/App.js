import React, { Component } from'react';
import TodoInput from'./TodoInput';
import TodoList from'./TodoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[{
        title:'デフォルトTODO',id:0,
      },
    ],
    uniqueId:1,
  };
  this.addTodo = this.addTodo.bind(this);
  this.reseteTodo = this.reseteTodo.bind(this);
}

addTodo(title) {
   const {
     tasks,
     uniqueId,
   } = this.state;

   tasks.push({
     title,
     id: uniqueId,
   });

   this.setState({
     tasks,
     uniqueId: uniqueId + 1,
   });
}

reseteTodo() {
  this.setState({
    tasks: [],
  });
}

render () {
return(
  <div className="App">
    <h1>TODO App</h1>
    <button onClick={this.reseteTodo}>Reset</button>{
    }
    <TodoInput addTodo={this.addTodo} />
    <TodoList tasks = {this.state.tasks}/>
  </div>
    );
  }
}

export default App;
