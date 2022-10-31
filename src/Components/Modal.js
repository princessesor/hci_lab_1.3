import React from 'react';
import './Modal.css';

function modal( {closeModal} ){
    return(
      <div className='modalBackground'>
       <div className='modalContainer'>
        <div className='titleCloseBtn'>
        <button onClick={()=> closeModal(false)}> X </button> </div>
        <div className='title'>
            <h1> Prompting close </h1>
        </div>
          <div className='body'>
            <p> Are you sure you want to cancel, data would be lost </p>
          </div>
          <div className='footer'>
            <button onClick={()=> closeModal(false)} >yes</button>
            <button>no</button>
          </div>
        </div>
    </div>
    )
}

export default modal;