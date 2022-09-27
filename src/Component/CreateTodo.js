import React, { useState } from 'react'
import {useContext} from 'react'
import {TodoContext} from '../Context/TodoContext'


function CreateTodo() {

    const {addTodo} = useContext(TodoContext)

    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')

    const submitForm = () =>{
        if(title !== "" && body !== ''){
            addTodo({title,body})
            setBody('')
            setTitle('')
            document.querySelector('#addTodo').style.display = ''
            setTimeout(() =>{
                document.querySelector('#addTodo').style.display = 'none'
            },2000)
        }else{

            document.querySelector('#validation').style.display = ''
            setTimeout(() =>{
                document.querySelector('#validation').style.display = 'none'
            },2000)


            
        }

        

    }



  return (
    <div>
        <div id='validation' className='alert alert-danger' style={{display:"none"}}>
            it is empty
        </div>
        <div id='addTodo' className='alert alert-info' style={{display:"none"}}>
            Add is success
        </div>
        <div id='deleteTodo' className='alert alert-danger' style={{display:"none"}}>
            delete is success
        </div>
        <div className='card py-2'>
            <div className='container'>
                <h2 className='my-4'><b>Welcome In Todo....</b></h2>
                <hr/>
                <div className='row my-2'>
                    <div className='col-3'>
                        <label><b>title</b></label>
                    </div>
                    <div className='col-9'>
                        <input onChange={(e) => setTitle(e.target.value)} className='form-control' value={title}/>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-3'>
                        <label><b>description</b></label>
                    </div>
                    <div className='col-9'>
                        <input onChange={(e) => setBody(e.target.value)} className='form-control' value={body}/>
                    </div>
                </div>
                
                <div className='row justify-content-center my-4'>
                    <button onClick={submitForm} className='col-8 btn btn-primary'>Add Todo</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default CreateTodo