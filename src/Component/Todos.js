import React from 'react'
import Todo from './Todo'
import {useContext} from'react'
import {TodoContext} from '../Context/TodoContext'

function Todos() {
    const {todos} = useContext(TodoContext);
  return (
    <div>
        {
            todos.map(todo =>
                <Todo key={todo.id} todo={todo}/>
                )
        }
    </div>
  )
}

export default Todos