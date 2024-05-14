import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import BarraAdmin from '../navegacion/BarraAdmin';
import AdminAvisos from './AdminAvisos';
import MsgPersonal from './MsgPersonal';



function AppAdmin() {
  return (
    <div>
      <h1>Barra admin</h1>
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
