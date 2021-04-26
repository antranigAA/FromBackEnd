import {useContext, useEffect} from "react"
import DataContext from "../context/data/DataContext";

const User = (props) => {

    const {user, getUser} = useContext(DataContext);
    const id = props.match.params.id;

    useEffect(()=>{
        getUser(id);
    },[])

    return(
        <div className="todo container">
            <h1>user {id}</h1>
            <h2>id: {user && user.id}</h2>
            <h2>title: {user && user.title}</h2>
            <h2>Email: {user && user.email}</h2>
        </div>
    );
}

export default User;

