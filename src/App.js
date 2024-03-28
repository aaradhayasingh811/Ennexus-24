import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
 
import Codigo from './Components/Codigo'  
import Flip_Flop from './Components/Flip_Flop'  
import WTW from './Components/Weild_The_Web'  
import CTF from './Components/CTF'  
import Algo_Hunt from './Components/Algo_Hunt'  
import Debugger from './Components/Debugger'  
import Second from './Components/Second'  

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Second}/>
        <Route exact path='/algo'  Component={Algo_Hunt} />
        <Route exact path='/codigo'  Component={Codigo} />
        <Route exact path='/ctf'  Component={CTF} />
        <Route exact path='/wtw'  Component={WTW} />
        <Route exact path='/flipflop'  Component={Flip_Flop} />
        <Route exact path='/debugger'  Component={Debugger} />
    </Routes>
    </BrowserRouter>
     {/* <Second /> */}
    </>
  );
}

export default App;
