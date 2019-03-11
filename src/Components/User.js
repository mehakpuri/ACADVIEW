import React, { Component } from 'react';
import axios from 'axios';

class User extends Component{
    state={
        comm: [ ]
    }
    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.user_id;
        axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
        .then( res => {
            this.setState({
                comm: res.data
            })
        })
    }
    render(){
       
        const comm = this.state.comm ? (
            <div className="card">
                 <div className='center card-title'>{this.state.comm.name} </div>
            {this.state.comm.id%2===0 ? <img src="https://i.imgur.com/DzO5WLi.png" alt="not found" className="even" /> : <img src="https://i.imgur.com/HMwJzB3.jpg" className="odd" alt="not found" />}
                 <p>{this.state.comm.body}</p>
            </div>
        ) : ( <p> loading..... </p> )
        
         return(
            <div className='container'>
                {comm}
            </div>
        )
    }
}
export default User;