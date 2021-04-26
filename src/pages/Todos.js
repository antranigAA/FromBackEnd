import {useContext, useEffect} from "react";
import DataContext from "../context/data/DataContext";
import {Link} from "react-router-dom";

const Todos = () => {

   const {todos, getTodos} =  useContext(DataContext);

   useEffect(()=>{
       getTodos();
   },[]);

    return(
        <div className="container">

            <ul className="list-group">
                {todos && todos.map( (el, index) => <li className="list-group-item" key={index}>
                    {el.title}
                    <Link to={"/todos/"+ el.id} className="btn btn-secondary">Detail</Link>
                </li> )}
            </ul>
        </div>
    );
}

export default Todos