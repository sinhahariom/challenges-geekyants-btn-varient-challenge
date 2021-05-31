import './App.scss';
import {  useState } from 'react';


//Child Component Definition
const ButtonComponent = (props)=>{
  const debug = ()=>{
    console.log(props.btnIsActive);
  }
  return <div className="btn-wrapper">
    <button onClick={debug} style={{backgroundColor:props.btnVarient}} disabled={props.btnIsActive}>{props.btnCaption}</button>
  </div>
}

function App() {

  //States Used to Incorporate the requirements
  const [btnVarient,setBtnVarient] = useState('');
  const [btnCaption,setBtnCaption] = useState('');
  const [btnIsActive,setBtnIsActive] = useState(true);

  //handler methods for the Events and states
  const handleBtnVarient = (e)=>{
    let cTemp = e.target.value;
    if(cTemp==="Primary"){
      setBtnVarient("blue");
    }else if(cTemp==="Warning"){
      setBtnVarient("yellow");
    }else if(cTemp==="Danger"){
      setBtnVarient("red");
    }
  }
  const handlebtnState = (e)=>{
    setBtnIsActive(prev=>!prev);
  }
  const handleBtnCaption = (e)=>{
    setBtnCaption(e.target.value);
  }



  return (
    <div className="App">
      <div className="input-wrapper">
        <div className="inputs">
          <span>Button Varient</span>
          <select onChange={(e)=>handleBtnVarient(e)}>
            <option value="Primary">Primary</option>
            <option value="Warning">Warning</option>
            <option value="Danger">Danger</option>
          </select>
          <span>Button State</span>
          <div className="radio-wrapper">
            <span>Enabled</span>
            <input type="radio" name="state" onChange={(e)=>handlebtnState(e)} value={true}/>
            <span>Disabled</span>
            <input type="radio" name="state" onChange={(e)=>handlebtnState(e)} value={false}/>
          </div>
          <span>Button Caption</span>
          <input type="text" onChange={(e)=>handleBtnCaption(e)}></input>
        </div>
      </div>
        {/* Child Component */}
        <ButtonComponent btnVarient={btnVarient} btnIsActive={btnIsActive} btnCaption={btnCaption}  ></ButtonComponent>
    </div>
  );
}

export default App;
