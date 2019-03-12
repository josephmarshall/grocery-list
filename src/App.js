import React, { Component } from 'react';
import './App.css';
import List from "./List"
import NewItemForm from "./NewItemForm"

class App extends Component {
  state = {
    items: [
      { id: 1, name: "bread", complete: true },
      { id: 2, name: "milk", complete: false },
      { id: 3, name: "bananas", complete: false },
      { id: 4, name: "cheese", complete: true },
    ]
  }

  getId = () => {
    const { items } = this.state
    let newId;
    if (items.length === 0) {
      newId = 1
    } else {
      newId = Math.max.apply(Math, items.map(item => item.id)) + 1
    }
    return newId
  }
  addItem = (name) => {
    const { items } = this.state
    const item = { name, id: this.getId(), complete: false}
    this.setState({items: [...items, item]})
  }

  handleClick = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  deleteItem = (id) => {
    const {items} = this.state;
    this.setState({
      items: items.filter( item => {
      if (item.id !== id) {
        return item
        }
        return null
      })
    })
  }
    
    render() {
    const { items, } = this.state

    return (
      <div style={{color: 'blue', textAlign: 'center'}}>
        <h1>Grocery List</h1>
        <NewItemForm addItemFunction={this.addItem} />
        <List name="Grocery List" items={items} itemClick={this.handleClick} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
