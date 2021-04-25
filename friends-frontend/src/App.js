import Header from "./components/Header"
import Footer from "./components/Footer"
import FriendsList from "./components/FriendsList"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CreateFriend from "./components/CreateFriend";

function App() {
  return (
    <Router>
    <Header/>
    <div className="container">
    <Switch>
    <Route path="/" exact component={""}/>
    <Route path="/add" component={CreateFriend }/>
    <Route path="/FriList" component={FriendsList}/>
    </Switch></div>
    <Footer/>
    </Router>
  );
}

export default App;
