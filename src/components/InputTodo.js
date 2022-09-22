import React, {Fragment,useState} from 'react'

const InputTodo = ()=>{
    const [desc,setDescription] = useState('')
    const onSubmitForm = async(e)=>{
        //prevent from reload after submitted form
        e.preventDefault()
        try {
            const body = {desc};
            await fetch('http://localhost:3000/add', {
                method : "POST",
                headers: {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            })

            window.location = '/';
        } catch (error) {
            console.error(error.message)
        }
    }
    return(
        <Fragment>
            <h1 className='text-center mt-5'>TodoList</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' value={desc} onChange={e=> setDescription(e.target.value)}/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;