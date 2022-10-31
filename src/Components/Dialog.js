import React from 'react';
import { useState } from 'react';
import './Dialog.css';

function Dialog ( {closeDialog} ){
    const [formData, setformData] = useState({
        option: " "
    })
     const handleChange = event =>{
        const target = event.target 
        const name = target.name
        const value = target.value
        setformData({
            ...formData,
            [name] : value
        })
     }
    return(
        <div className='custom'> 
        <label>
        Message Enter: {formData.options}  
        <input name="name"/>
      </label>

       <form>
        <div>
     <label> option 1 </label>
      <input type="radio" name="options" value="one"
             onChange={handleChange}  checked={formData.gender="one"}/>

      <label> option 2 </label>
      <input type="radio" name="options" value="two"
             onChange={handleChange} checked={formData.gender="two"}/>

      <label> option 3 </label>
      <input type="radio" name="options" value="three"
              onChange={handleChange} checked={formData.gender="three"}/>

      <label> option 4 </label>
      <input type="radio" name="options" value="four"
              onChange={handleChange} checked={formData.gender="four"}/>
        </div>
       </form>

       <button> OK </button>
       <button> CANCEL onClick={()=> closeDialog(false)} </button>
      </div>
    )
}

export default Dialog;