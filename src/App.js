import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: [
            {id: 1, item: 'Play badminton'},
            {id: 2, item: 'Evaluate Assignment'}
        ]
    }

deleteTodo = (id) => {
    //console.log(id);
    let todos = this.state.todos.filter( todo => {
        return todo.id !== id
    })
    this.setState({
        todos
    })
}
 addTodo = (todo) => {
    console.log('Inside App Component', todo);
   
    todo.id = Math.floor(Math.random() * 10);
    console.log(todo.id);
    
    let todos = [...this.state.todos, todo]; // ... -> this is a spread operator used to create a copy

    this.setState({
      todos
    })
  }
 
 componentDidMount(){
     console.log('Component has been mounted');
 }

componentDidUpdate(prevProps, prevState){
    console.log('component Updated');
    console.log(prevProps, prevState);
}

  render() {
    return (
      <div className="App container">
            <h3 className="center purple-text">My TODO's</h3>
            <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
