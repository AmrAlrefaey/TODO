import React from 'react'
import {useContext} from'react'
import {TodoContext} from '../Context/TodoContext'

function Todo({todo}) {

    const {deleteTodo} = useContext(TodoContext);

    const submitForm = () =>{
            deleteTodo(todo.id)     
            document.querySelector('#deleteTodo').style.display = ''
            setTimeout(() =>{
                document.querySelector('#deleteTodo').style.display = 'none'
            },2000)
        
    }

  return (
    <div>
        <div className='card'>
            <div className='container'>
                <div className='row m-2'>
                    <div className='col-6'>
                        {todo.title}
                    </div>
                    <div className='col-6 text-end'>
                    <button onClick={submitForm} className='btn  btn-danger'>
                        delete
                    </button>
                    </div>
                </div>
                <hr/>
                {todo.body}
            </div>
        </div>
    </div>
  )
}

export default Todo