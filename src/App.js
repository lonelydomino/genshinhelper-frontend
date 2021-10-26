import './App.css';
import MainContainer from './Main Container/MainContainer';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import background from './assets/images/bg1.jpeg'

// import Login from './login';
// import Mainpage from './main';


function App() {
  // const [user] = useAuthState(auth)
  // require('dotenv').config()
  return (
    <div className="App">
       <h1>{process.env.REACT_APP_TITLE}</h1>
    <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
        {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}     
        <MainContainer />
    </div>
  );
}

export default App;
