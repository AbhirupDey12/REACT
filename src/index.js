import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './Head' ;
import Foot from './Foot';
import Comp1 from './Comp1';

// Here , we are telling create this element as the top most element of the react(In the below line)
const root = ReactDOM.createRoot(document.getElementById('root'));

function Button(props) {
  console.log(props) ;
  return (
    <div>
      <button onClick={props.handleClick} > {props.text} </button>
    </div>
  );
}

function button1Click() {
  console.log("clicked button 1")
}

function button2Click() {
  console.log("clicked button 2")
}

root.render(
  <div>
    <Head></Head>
    <Button  text={"Click from root"} val = {100} data={"Click from the button"} handleClick={button1Click} ></Button>
    <Button  text={"Click from root button 2"} val = {100} data={"Click from the button, products "} handleClick={button2Click} ></Button>
    <Comp1></Comp1>
    <Foot></Foot>
  </div>
);

// Here, text is the prop name and Click from root is the value which is been recieved as the object in the component function 
