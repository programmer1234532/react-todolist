import React, { Component } from 'react'
import Input from "./Input";
import ToDoList from './ToDoList';
import "../scss/app.scss";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {todo: [
            {id:0, activity:"do homework"}
        ],
        newActivity:"",
        editIndex:0,
        editMode2:false
    };
    }

    handleData = (data,idx) => { 
        this.setState(prevState => ({
            todo: [...prevState.todo,
                {id:idx,activity:data}]
        }));
        console.log(this.state.todo);
    }

    updateGrandParents = (index2) => {
        let arrayCopy = this.state.todo.filter(item => item.id !== index2);
        console.log(index2);
        console.log(arrayCopy);
        this.setState({todo:arrayCopy});
    }

    editGrandParent = (shoudlntDoIt,idx) => {
        this.setState({editIndex:idx,editMode2:shoudlntDoIt});
    }

    getNewActivity = (newActivity2,wontDo) => {
        let copyArray = [...this.state.todo];
        let addObj = {id:this.state.editIndex,activity:newActivity2}; 
        let arrayToAdd = copyArray.map(item => item.id == this.state.editIndex ? addObj : item);
        this.setState({todo:arrayToAdd,editMode2:wontDo});
    }

    render(){
        return(
            <div className="container">
                <div className="extra-container">
                    <Input getNewActivity={this.getNewActivity} editData={this.state.editMode2} sendData={this.handleData}/>
                </div>
                <div className="tododiv">
                    <ToDoList wontDo={this.state.dontDo} theNewActivity={this.state.newActivity} editGrandParent={this.editGrandParent} updateGrandParent={this.updateGrandParents} list={this.state.todo}/>
                </div>
            </div>
        );
    }
}

export default App;