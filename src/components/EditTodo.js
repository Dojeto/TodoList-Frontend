import React,{Fragment, useState} from "react";

const EditTodo = ({ todo })=>{
    const [desc,setDescription] = useState(todo.description);
    const editTodoList = async()=>{

        try {
            const body = {desc}
            await fetch(`http://localhost:3000/update/${todo.todo_id}`,{
                method:"PUT",
                headers: {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            })
            window.location ='/'
        } catch (error) {
            console.error(error.message)
        }
    }
    return(
       <Fragment>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit TodoList</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <input type='text' className='form-control' value={desc} onChange={(e)=>{setDescription(e.target.value)}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>editTodoList()}>Submit</button>
      </div>
    </div>
  </div>
</div>
       </Fragment>
    )
}

export default EditTodo