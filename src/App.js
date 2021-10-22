import './App.css';
import MainContainer from './Main Container/MainContainer';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
// import Login from './login';
// import Mainpage from './main';


function App() {
  // const [user] = useAuthState(auth)
  return (
    <div className="App">
        <MainContainer />
    </div>
  );
}

export default App;
