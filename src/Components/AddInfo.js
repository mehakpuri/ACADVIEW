import React, { Component } from 'react';
import '../App.css';

class AddInfo extends Component {
  state= {
      name: null,
      birthday: null,
      aboutMe: null
  }
  handleChange= (e) => {
    this.setState({
     [e.target.id]: e.target.value
    }
    )
  }
  handleSubmit= (e) => {
    e.preventDefault();

    console.log('Inside AddInfo Component', this.state);
    
    this.props.addInfo(this.state);   // We are accessing the function as a prop we passed from the parent component.
      this.setState({
          name: '',
          birthday: '',
          aboutMe: ''
      })
  }
  render(){
    return(
      <div className='AddInfo card'>
        <div className='card-content'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' > Name </label>
          <input type='text' id='name' value={this.state.name} onChange={this.handleChange} /> <br />
          <label htmlFor='birthday'> Birthday </label>
          <input type='text' id='birthday' value={this.state.birthday} onChange={this.handleChange} /> <br />
          <label htmlFor='aboutMe'> About Me </label><br /><br />
          <textarea id='aboutMe' value={this.state.aboutMe} onChange={this.handleChange} /> <br /><br />
          <button className="dlt"> Submit </button>
        </form>
        </div>
      </div>
    )
  }
}
export default AddInfo;