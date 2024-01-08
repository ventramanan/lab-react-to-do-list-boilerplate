import React from "react";
import Todo from "./components/Todo";
import './index.css'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: " ",
      todoList :[],

    }
  }
  inputChange=(e)=>{
    this.setState({
      input:e.target.value,

    })

  }
  
  submit=(e)=>{
    e.preventDefault();
    if (this.state.input.length>0){
      this.setState({
        input: " ",
        todoList:[...this.state.todoList,this.state.input]
      })
    }
  }
  update = (newItem,index)=>{
    let data=this.state.todoList;
    data.splice(index,1,newItem)
    this.setState({
      todoList:data,
    })
  }


  deleteItem=(index)=>{
    let data=this.state.todoList;
    data.splice(index,1)
    this.setState({
      todoList:data,

    })
  }


  render(){
    return(
      <>
      <div className="my">
        <div className="div">
          <form onSubmit={this.submit}>
            <input type="text"  placeholder="enter"  value={this.state.input} onChange={this.inputChange} />
            <button>Add Item</button>
          </form>
          <h3>{this.state.input}</h3>
        
        <div>
          {
            this.state.todoList.length==0 ?(
              <>
              </>
            ) : (
              this.state.todoList.map((ele,i)=>{
                return(
                  <>
                  <div>
                    <Todo
                    e={ele}
                    index={i}
                    update={this.update}
                    deleteItem={this.deleteItem}
                    />

                  </div>
                  </>
                )
              })
            )
          }
        </div>
        </div>
      </div>
      
      </>
    )
  }
}

export default App;
