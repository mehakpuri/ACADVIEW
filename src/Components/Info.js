import React,{ Component } from 'react';
import Person from './Person';
import AddInfo from './AddInfo';
import '../App.css';

class Info extends Component{
     state ={
      infos: [
      { name: 'Rhea', birthday:'30-10-1997', aboutMe:'I love dancing', id: 1 },
      { name: 'John', birthday:'5-04-2002', aboutMe:'I love playing cricket', id: 2 },
        { name: 'John', birthday:'14-09-1994', aboutMe:'I love reading books', id: 3 }
        ]
    }
    deleteInfo = (id) =>{
        let infos = this.state.infos.filter(info=>{
          return info.id!==id;
            })
      //console.log('After Deleting',infos);
      this.setState({
          infos
      })
    }
    addInfo = (info) => {
        console.log('Inside App Component', info);
        info.id = Math.floor(Math.random() * 10);
        console.log(info.id);
        let infos = [...this.state.infos, info];
        this.setState({
            infos
        })
    }
    componentDidMount(){
      console.log('Component has been mounted');
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component updated");
        console.log(prevProps, prevState);
    }
  render(){
      return (
        <div className="App container">
          <h4 className="center">Information of People</h4>
          <Person infos={this.state.infos} deleteInfo={this.deleteInfo}/>
          <br />
          <h5 className="center heading"> Add Person Details </h5>
          <AddInfo addInfo={this.addInfo} />
        </div>
      );
  }
}

export default Info;