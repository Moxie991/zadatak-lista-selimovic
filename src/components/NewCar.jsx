import React, { useState } from 'react';

const NewCar = ({onNewCarSubmit}) => {
    const [marka, setMarka] = useState ("");
    const [tip, setTip] = useState ("");
    const [godište, setGodište] = useState ("");

  return (
    <form onSubmit={onNewCarSubmit}> 
        <labe>Upiši naziv automobila</labe>
        <input type = "text" value = {marka} onChange = {(event) => setMarka (event.target.value)} />
        <br />
        <br />
        <label>Tip vašeg automobila</label>
        <input type = "text" value = {tip} onChange = {(event) => setTip (event.target.value)} /> 
        <br />
        <br />
        <label>Godište vašeg automobila</label>
        <input type = "text" value = {godište} onChange = {(event)=> setGodište (event.target.value)}/>
        <br />
        <br />
        <button onNewCarSubmit>Submit form</button>
    </form>
  )
}

export default NewCar