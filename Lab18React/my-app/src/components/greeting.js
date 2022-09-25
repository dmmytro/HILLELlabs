import React from "react"

const taskStyle = {
    image: {
    width: '400px'
    },
    divBloc: {
        margin: 'auto',
        padding: '10px',
        textAlign: 'center'
    }

};

export default function Greeting(props) {
    return(
        <div style={taskStyle.divBloc}>
            <img src={props.image} style = {taskStyle.image} alt="logo" />
            <h1>Hello there. {props.name}</h1>
        </div>
    );
}