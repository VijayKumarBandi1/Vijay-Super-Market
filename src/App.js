import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profille/Profile';
import{BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/profile' element={  <Profile/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
