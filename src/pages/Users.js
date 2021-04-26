import {useEffect, useContext} from "react";
import DataContext from "../context/data/DataContext";
import {Link} from "react-router-dom";

const Users = () => {

    const{getUsers, users} = useContext(DataContext);

    useEffect(()=>{
        getUsers();
    },[]);

    return(
        <div className="container">
           {users && users.map((el) => <h2 key={el.id}>
               <Link to={"/users/"+el.id}>{el.id} - {el.name}</Link>
           </h2>)}
        </div>
    );
}

export default Users;



