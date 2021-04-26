import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Header from "./componenets/Header";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";
import Todo from "./pages/Todo";
import DataState from "./context/data/DataState";
import Post from "./pages/Post";
import User from "./pages/User";

const App = () => {
  return (
      <DataState>
          <Router>
              <Header />
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/users/:id" component={User}/>
                      <Route path="/users" component={Users}/>
                      <Route path="/todos" exact component={Todos}/>
                      <Route path="/todos/:id" component={Todo}/>
                      <Route path="/posts/:id" component={Post}/>
                      <Route path="/posts"  component={Posts}/>
                      <Redirect to="/"/>
                  </Switch>
          </Router>
      </DataState>
  );
}

export default App;
