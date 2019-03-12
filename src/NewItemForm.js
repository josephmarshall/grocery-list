import React from "react"

class NewItemForm extends React.Component{
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItemFunction(this.state.name);
    this.setState({ name: '', })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render(){
    const { name } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          name="name"
          onChange={this.handleChange}
          required 
          placeholder="add item" 
        />
      </form>
    )
  }
}

export default NewItemForm