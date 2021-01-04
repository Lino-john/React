// import react and react dom lib
import React from 'react'
import ReactDOM from 'react-dom'


// create react component
function getBtnText() {
    return "Click Me"
}

const APP = () => {
    var btnStyles = {backgroundColor:"blue", color:"white"};
    var label = "Enter name:";
    return (
        <div>
            <label className="label" for="name">{label}</label>
            <input id="name" />
            <button className="btn" style={btnStyles}>{getBtnText()}</button>
        </div>
    );
}

// import react component and show on the screen 
ReactDOM.render(
    <APP/>,
    document.querySelector('#root')
)
