import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component{

    updateParent = (idx) => {
        this.props.updateGrandParent(idx);
        console.log(idx);
    }

    editParent = (shoudlnt,indx) =>{
        this.props.editGrandParent(shoudlnt,indx);
    }

    render(){
        const list2 = this.props.list.map(element => 
            <ToDoItem dontDoThat={this.props.wontDo} parentData={this.updateParent} editActivity={this.editParent} removeKey={element.id} key={element.id} activity={element.activity}></ToDoItem>
        );

        return(
            <div className="todolist">
                {list2}
            </div>
        );
    }
}

export default ToDoList;