import React, { Component } from 'react';

class ToDoItem extends Component{
    state ={checked:false, dontDoIt:true};

    check = () => {
        if(this.state.checked === false){
            this.setState({checked:true});
        }
        else{
            this.setState({checked:false});
        }
    }

    removeItem = () => {
        this.props.parentData(this.props.removeKey);
    }

    edit = () => {
        this.props.editActivity(this.state.dontDoIt,this.props.removeKey);
    }

    render(){
        
        return(
            <div className="todo">
                <div className="para">
                    <p className={this.state.checked ?  "line": "no-line"}>{this.props.activity}</p>
                </div>
                <div className="icons">
                    <a href="#" onClick={this.check}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </a>
                    <a href="#" onClick={this.edit}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a>
                    <a href="#" onClick={this.removeItem}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default ToDoItem;