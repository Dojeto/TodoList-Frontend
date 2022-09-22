import React, {Fragment,useState,useEffect}from "react";
import EditTodo from "./EditTodo";

const ShowList = ()=>{
    const [todos,setTodos] = useState([]);

    const deleteTodo = async(id)=>{
        try {
            await fetch(`http://localhost:3000/delete/${id}`,{
                method:"DELETE"
            });
            setTodos(todos.filter((todo)=>{
                return(todo.todo_id !== id)
            }))
        } catch (err) {
            console.log(err.message);
        }
    }

    const getTodos = async()=>{
        try {
            const response = await fetch('http://localhost:3000/getall');
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(()=>{
        getTodos();
    },[])

    console.log(todos);
    return(
        <Fragment>
            <h1 className="text-center mt-3">List Todos</h1>
            <table className="table mt-5 text-center">
            <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {todos.map((todo)=>{
            return(
                <tbody>
                <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                    <EditTodo todo={todo}/>
                </td>
                <button className="btn btn-danger mt-3" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                </tr>
                </tbody>
            )
        })}
      </table>
    </Fragment>
    )
}

export default ShowList