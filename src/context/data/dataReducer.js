import {CLEAR_DATA, GET_POSTS, GET_TODOS, GET_USERS, GET_USER, GET_POST, GET_TODO} from "../types";


const dataReducer = (state, action) => {

    switch (action.type){
        case GET_USERS: return {users: action.payload};
        case GET_POSTS: return {posts: action.payload};
        case GET_TODOS: return {todos: action.payload};
        case GET_USER: return  {user: action.payload};
        case GET_POST: return {post: action.payload};
        case GET_TODO:return {todo: action.payload};
        case CLEAR_DATA: return {users: [], posts:[], todos: [], user:{}, post:{}, todo:{}};

        default: return state;
    }
}

export default dataReducer;

