import React, { Component } from 'react';
import './App.css';
import './components/Todos'
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'clean windows',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'complete homework',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState(
      {
        todos: this.state.todos.map((todos) => {
          if(todos.id === id) {
            todos.completed = !todos.completed
          }
          return todos
        })
      }
    )
  }

  delTodo = (id) =>
    this.setState(
      {
        todos: [
          ...this.state.todos.filter(todo => todo.id !== id)
        ]
      }
    )

    addTodo = (title) => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      }

      this.setState(
        {
          todos: [...this.state.todos, newTodo]
        }
      )
    }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render={
              props => (
                <React.Fragment>
                   <AddTodo addTodo={this.addTodo}/>
                    <Todos 
                    todo={this.state.todos} 
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo}
                    />
                </React.Fragment>
                )
              }
            />
          </div>
        </div>
      </Router>
    )
  }

}

export default App;
