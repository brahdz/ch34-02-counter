import { useState } from "react";
import { Button } from "../button/Button";



// Counter Component
const CounterApp = () => {

//Hook UseState
const [counter, setCounter] = useState(0);

    const handleIncrement = ()=>{
        setCounter(counter + 1);
    }    

    const handleDecrement = ()=>{
        setCounter(counter - 1);
    }    

    const handleReset = ()=>{
        console.log("Has pulsado el boton de reset")
        setCounter(0);
    }    


    const counterComponent = (
    <div className="counter-container">
        <h2 id="counter"> {counter} </h2>
        <div id="buttons">
            <Button onClick={ handleIncrement }>Add</Button>
            <Button onClick={ handleDecrement }>Less</Button>
            <button onClick={ handleReset }>
                Restart
            </button>
        </div>
    </div>
    );
    return counterComponent;

};

export default CounterApp;