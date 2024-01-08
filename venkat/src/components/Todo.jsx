import React from "react";

class Todo extends React.Component{
    constructor(){
        super();
    }
    render(){
        let{e,index,update,deleteItem}
        =this.props 
        return(
        <>
        <div>
            <input type="text" onChange={(e)=>{
                update(e.target.value)
            }} value={e} />
            <button onClick={()=>{
                deleteItem(index)
            }}>Delete Item</button>
        </div>
        </>
        )
    }
}
export default Todo;