import {useContext, useEffect} from "react";
import DataContext from "../context/data/DataContext";

const Post = (props) => {

    const {getPost, post} = useContext(DataContext);
    const id = props.match.params.id;

    useEffect(()=>{
        getPost(id);
    },[])

    return(

            <ul className="list-group container">
                <h1>Todo {id}</h1>
                <li className="list-group-item"><strong>iD:</strong> {post && post.id}</li>
                <li className="list-group-item"><strong>title:</strong> {post && post.title}</li>
                <li className="list-group-item"><strong>Body:</strong> {post && post.body}</li>
            </ul>

    );
}

export default Post;



