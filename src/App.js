import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todos = [
  {
    name: "Clean Room",
    id: 1,
    completed: false
  },
  {
    name: "Clean Garage",
    id: 2,
    completed: false
  },
  {
    name: "Just Clean",
    id: 3,
    completed: false
  },
  {
    name: "Just Clean",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todos
    };
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId) {
        console.log(item);
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      todoList: newTodoList
    });
  };
  addNewItem = itemText => {
    const newItem = {
      id: Date.now(),
      completed: false,
      name: itemText
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };
  clearCompleted = () => {
    const newTodoList = this.state.todoList.filter(item => {
      if (!item.completed) {
        return item;
      } 
    });
      console.log(newTodoList, "new list")
    this.setState({
      todoList: newTodoList
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addNewItem={this.addNewItem} />
        </div>
        <TodoList
          todos={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
