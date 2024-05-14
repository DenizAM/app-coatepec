import React from 'react'

import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import BarraAdmin from './componentes/navegacion/BarraAdmin';
import AdminAvisos from './componentes/paginas/AdminAvisos';
import MsgPersonal from './componentes/paginas/MsgPersonal';



function AppAdmin() {
  return (
    <div>
        <Router>
          <BarraAdmin/>
            <Routes>
                <Route path='AdminAvisos' exact Component={AdminAvisos}/>
                <Route path='MsgPersonal' exact Component={MsgPersonal}/>
            </Routes>
        </Router>
    </div>
  );
}

export default AppAdmin
