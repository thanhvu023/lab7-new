// import logo from './logo.svg';

import './scss/App2.scss';

import Test from './Test';
import { Routes, Route , BrowserRouter} from 'react-router-dom';

import  Src  from './Src';
import ListPlayers from './components/ListPlayers';
import Home from './components/Home';


function App() {


  return (
  
    <div className="App" >
  
     < Routes>
     <Route path='/src' element={<Src></Src>}></Route>
     <Route path='/ip1' element={<Test/>}></Route>
     <Route path='/list' element={<ListPlayers></ListPlayers>}></Route>
    
     <Route path='/home' element={<Home></Home>}></Route>
   </Routes>
   
   
  
   
    </div>
   

  );
}


export default App;
