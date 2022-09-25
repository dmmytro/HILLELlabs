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

function HomeElement(props){
    return(
      <React.Component>
        <img src={props.image} style = {taskStyle.image} alt="logo" />
        <p>Hello. This is homepage</p>
      </React.Component>
    );
}

export default HomeElement;