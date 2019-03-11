import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state={
        comm: [ ]
    }
    componentDidMount(){
        //console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            //console.log('Response from API',res);
              this.setState({
                comm: res.data.slice(0, 10)
              })
            })
    }
    render(){
        const { comm } = this.state;
        //console.log(this.state);
        const userList = comm.length ? (
            comm.map(user => {
                return (
                    <div className='user card' key={user.id}>
                        <div className='card-content'>
                            <Link to = {'./' + user.id}>
                                <span className = 'card-title'>{user.name}</span>
                            </Link>
                            {user.id%2===0 ? <img src="https://i.imgur.com/DzO5WLi.png" alt="not found" className="even" /> : <img src="https://i.imgur.com/HMwJzB3.jpg" className="odd" alt="not found" />}
                            <p>{user.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No users found </p>
        )
        return(
            <div className='center'>
                <h4 className='container'>Homepage</h4>
                { userList }
            </div>
        )
    }
    
}
        
export default Home;