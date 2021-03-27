
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register'
import PrivateRoute from './PrivateRoute';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { AuthContext } from "./auth";
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import axios from 'axios'
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
    if(authTokens)
    {
        axios.defaults.headers.common['Authorization'] = "Token " +authTokens.token
    }
    else{
        delete axios.defaults.headers.common['Authorization']
    }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens:setTokens }}>
      
      <Router>
        <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/quizzes" component={QuizList}/>
      <PrivateRoute exact path="/:id" component={TakeQuiz}/>
      
      
                

            </Switch></Router>
  </AuthContext.Provider>
  );
}
export default App