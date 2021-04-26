import {useContext, useEffect} from "react";
import DataContext from "../context/data/DataContext";
import {Link} from "react-router-dom";


const Posts = () => {

    const {posts, getPosts} = useContext(DataContext);

        useEffect(()=>{
            getPosts();
        },[]);

    return(
        <div className="container">
            <ul className="list-group">
                {posts && posts.map((el) => <li className="list-group-item" key={el.id}>
                    {el.id} - {el.title}
                    <Link to={"/posts/"+ el.id}>Detail</Link>
                </li>)}
            </ul>
        </div>
    );
}

export default Posts;