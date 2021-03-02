import React, {Component} from "react";
import {render} from "react-dom";
import ReactDOM from 'react-dom'

function App(props){
    return <h1> Testing react code</h1>
}

const appDiv = document.getElementById("app");

ReactDOM.render(
    <App/>,
    appDiv
);