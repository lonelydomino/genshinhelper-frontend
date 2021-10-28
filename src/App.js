import './App.css';
import MainContainer from './Main Container/MainContainer';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import background from './assets/images/bg1.jpeg'
import { BrowserRouter as Router } from "react-router-dom";

// import Login from './login';
// import Mainpage from './main';


function App() {
  // const [user] = useAuthState(auth)
  // require('dotenv').config()
  return (
    <div className="App"> 
        <MainContainer />
    </div>
  );
}

export default App;
