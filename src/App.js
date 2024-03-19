
import './App.css';

import logo from './imagenes/logo.png';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Barra from './componentes/navegacion/Barra';
import Accesiblidad from './componentes/paginas/Accesiblidad';
import Avisos from './componentes/paginas/Avisos';
import Ayuda from './componentes/paginas/Ayuda';
import Contactos from './componentes/paginas/Contactos';
import Principal from './componentes/paginas/Principal';
import Sugerencias from './componentes/paginas/Sugerencias';


function App() {
  return (
    <div className="App">

        <img src={logo} width='120'/>
      
        <Router>
          <Barra/>

            <Routes>
                <Route path='/' exact Component={Principal}/>
                <Route path='Avisos' exact Component={Avisos}/>
                <Route path='Contactos' exact Component={Contactos}/>
                <Route path='Sugerencias' exact Component={Sugerencias}/>


            </Routes>

        </Router>
    </div>
  );
}

export default App;
