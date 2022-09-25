import React from "react";
import ReactDOM from "react-dom";

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
  


class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

    render(){
        return(
            <div style = {taskStyle.divBloc}>
                <h1>Hi, {this.props.name}</h1>
                <img src= {this.props.image} style = {taskStyle.image} alt="image" />
                <h2>It's {this.state.date.toLocaleTimeString()} right now.</h2>
            </div>
        );
        
    }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);

export default Hello;