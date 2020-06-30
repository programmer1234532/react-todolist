import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);

        this.state = {todo:"", counter: 1};
    }

    handleChange = (e) => {
        this.setState({todo:e.target.value});   
    }

    
    
    handleClick = () => {
        if(this.props.editData === true){
            const dontDo = false;
            this.props.getNewActivity(this.state.todo,dontDo);
            console.log("evan");
        }
        else{
            this.setState(prevState => ({
                counter:prevState.counter+1
            }));
            this.props.sendData(this.state.todo,this.state.counter);
            console.log("hello");
            console.log(this.props.editData);
        }
    }

    render(){
        return(
            <div className="main">
                <div className="input-style">
                    <input onChange={this.handleChange} placeholder="Activity to do"/>
                </div>
                <div className="btn">     
                    <a href="#"  onClick={this.handleClick} className="button">Add</a>
                </div>
            </div>
        );
    }
}

export default Input;