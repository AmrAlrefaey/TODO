import axios from "axios";
import { createContext,useEffect,useState } from "react";

export const TodoContext = createContext()

const TodoContextProvider = ({children}) =>{

    const [todos,setTodos] = useState([])

    useEffect( () =>{
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
            setTodos(res.data)
        })
    },[])

    const addTodo =(newtodo) =>{
        setTodos([...todos, newtodo])
    }

    const deleteTodo = (id) =>{
        let newTodo = todos.filter( todo => {
            return(
                todo.id !==id
            )
        })

        setTodos(newTodo)
    }



    return(
    
        <TodoContext.Provider value={{todos, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>

    )
}

export default TodoContextProvider