import {useReducer} from "react";
import axios from "axios";
import DataContext from "./DataContext";
import {GET_TODOS, GET_POSTS, GET_USERS, CLEAR_DATA, GET_USER, GET_POST, GET_TODO} from "../types";
import dataReducer from "./dataReducer";


const DataState = ({children}) => {

   const [state, dispatch] = useReducer(dataReducer, {
       users: [],
       todos: [],
       posts: [],
       user: {},
       todo: {},
       post: {}
   });

   const getUsers = async () => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
       dispatch({
           type: GET_USERS,
           payload: response.data
       });
   };

   const getUser = async (id) => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
       dispatch({
           type: GET_USER,
           payload: response.data
       });
   };

   const getPosts = async () => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
       dispatch({
           type: GET_POSTS,
           payload: response.data
       });
   };

   const getPost = async (id) => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id);
       dispatch({
           type: GET_POST,
           payload: response.data
       });
   };

   const getTodos = async () => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
       dispatch({
           type:GET_TODOS,
           payload:response.data
       });
   };

   const getTodo = async (id) => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos/"+id);
       dispatch({
           type: GET_TODO,
           payload: response.data
       });
   };

   const clearData = () => {
       dispatch({
           type: CLEAR_DATA
       });
   }

   const users = state.users;
   const posts = state.posts;
   const todos = state.todos;
   const user = state.user;
   const post = state.post;
   const todo = state.todo;


    return(
        <DataContext.Provider value={{ getUsers, getPosts, getTodos, users, posts, todos , getUser, getTodo, getPost, user, post, todo, clearData }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataState;


