import { Route, Switch } from 'react-router';
import './App.css';
import Home from './authComponnets/Home';
import LogIn from './authComponnets/LogIn';
import Navbar from './authComponnets/Navbar';
import SignUp from './authComponnets/SignUp';

function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={()=> <LogIn/>}/>
    <Route exact path="/signup" component={()=> <SignUp/>}/>
    <Route exact path="/home" component={()=> <Home/>}/>
    </Switch>
    </>
  );
}

export default App;
