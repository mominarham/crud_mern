import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CrearNote from './components/CreateNote';
import Notes from './components/Notes';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className='container' >
      <BrowserRouter>
          <Navbar/>

          <Route exact path='/' >
              <Home/>
          </Route>

          <Route path='/notes' >
              <Notes/>
          </Route>

          <Route path='/createNote' >
              <CrearNote/>
          </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
