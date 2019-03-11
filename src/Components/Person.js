import React from 'react';
import '../App.css';

const Person = (props) => {
    const { infos, deleteInfo } = props; 

    const infoList = infos.map( info => {
      
      return (
        <div className='card'>
            <div className='card-content font' key={info.id}>
              <div> <b> Name: </b> { info.name } </div>
              <div> <b> Birthday: </b> { info.birthday } </div>
              <div> <b> About Me: </b> { info.aboutMe } </div><br />
               <button className='dlt' onClick={()=>{deleteInfo(info.id)}}> Delete </button>
            </div>
        </div>
      )
    });

    return(
      <div className='infos'>
        { infoList }
      </div>
    )
  }

export default Person;