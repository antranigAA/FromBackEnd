import {useContext, useEffect} from "react"
import DataContext from "../context/data/DataContext";

const Todo = (props) => {

    const {getTodo, todo} = useContext(DataContext);
    const id = props.match.params.id;

    useEffect(()=>{
        getTodo(id);
    },[])

    return(
        <div className="todo">
            <h1>Todo {id}</h1>
            <h2>id: {todo && todo.id}</h2>
            <h2>title: {todo && todo.title}</h2>
        </div>
    );
}

export default Todo;