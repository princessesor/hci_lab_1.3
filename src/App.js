import { useState } from 'react';
import './App.css';
import Modal from "./Components/Modal";
import Dialog from "./Components/Dialog";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
       <div>
       <button className='yes'
        onClick={() => {
          setOpenModal(true);}}> yes, no, cancel </button> 
        {openModal && <Modal closeModal={setOpenModal} />}
       
       <button className='noo'
       onClick={() => {
        setOpenModal(true);}}> abort,retry, ignore</button>
        {openModal && <Modal closeModal={setOpenModal} />} 
       </div>
       <br></br>
 
       <div>
        <button>file open</button>
       </div>
       <br></br>

       <div>
        <button className='yes'
         onClick={() => {
         setOpenDialog(true);}}> custom dialog </button>
         {openDialog && <Dialog closeDialog={setOpenDialog} />}
        

        <button> which option </button>
       </div>

       <div>
        <label>
          Dialog result: 
          <input name="name"/>
        </label>
       </div>
       <br></br>

       <div>
        <button> exit </button>
       </div>
      </header>
    </div>

  );
}

export default App;
