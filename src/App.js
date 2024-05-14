
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Barra from './componentes/navegacion/Barra';
import BarraAdmin from './componentes/navegacion/BarraAdmin';

import IniciarSesion from './componentes/paginas/IniciarSesion';
import Principal from './componentes/paginas/Principal';


import Avisos from './componentes/paginas/Avisos';
import Contactos from './componentes/paginas/Contactos';
import Sugerencias from './componentes/paginas/Sugerencias';
import Accesibilidad from './componentes/paginas/Accesibilidad';

import Ayuda from './componentes/paginas/Ayuda';
import Preguntas from './componentes/paginas/Preguntas';
import Atencion from './componentes/paginas/Atencion';





import AdminAvisos from './componentes/paginas/AdminAvisos';
import MsgPersonal from './componentes/paginas/MsgPersonal';
import AppAdmin from './componentes/paginas/AppAdmin';
import MenuAdmin from './componentes/paginas/MenuAdmin';


function App() {
  return (

 <div className="App">      
        <Router>
          <Barra/>
            <Routes>
                <Route path='IniciarSesion' exact Component={IniciarSesion}/>
                <Route path='/' exact Component={Principal}/>

                <Route path='Avisos' exact Component={Avisos}/>
                <Route path='Contactos' exact Component={Contactos}/>
                <Route path='Sugerencias' exact Component={Sugerencias}/>
                <Route path='Accesibilidad' exact Component={Accesibilidad}/>

                <Route path='Ayuda' exact Component={Ayuda}/>
                <Route path='Preguntas' exact Component={Preguntas}/>
                <Route path='Atencion' exact Component={Atencion}/>


                <Route path='AdminAvisos' exact Component={AdminAvisos}/>
                <Route path='MsgPersonal' exact Component={MsgPersonal}/>                
                <Route path='MenuAdmin' exact Component={MenuAdmin}/>    
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
