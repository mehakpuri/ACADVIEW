import React, { Component } from 'react';

class AddTodo extends Component {
  state= {
      item: ''
  }
  handleChange= (e) => {
    this.setState({
     [e.target.id]: e.target.value
    }
    )
  }
  handleSubmit= (e) => {
    e.preventDefault();

    console.log('Inside AddTodo Component', this.state);
    
    this.props.addTodo(this.state);   // We are accessing the function as a prop we passed from the parent component.
    
      this.setState({
          item: ''
      })
  }
  render(){
    return(
      <div className='AddTodo'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='item' > Add Todo </label>
          <input type='text' id='item' onChange={this.handleChange} value={this.state.item} /> <br />
          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default AddTodo;

// item: null OR '' (same)

//handleChange(e) => {
//    this.state({
//     item: e.target.value   
//    }
//    );
//}