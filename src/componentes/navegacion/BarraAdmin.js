import React from 'react';
import {Link} from 'react-router-dom';
import usuarioAdmin from '../../imagenes/usuarioAdmin.png';
import "../hojasEstilos/imagenes.css";
import '../hojasEstilos/general.css';
import logo from '../../imagenes/logo.png';

function BarraAdmin() {
  return (
    <div>
        <nav id='barra' className="navbar navbar-expand-lg bg-body-tertiary">


        <div className="container-fluid">


            <Link className="navbar-img" to='/iniciarSesion'>
                <img id="navbar-img" src={usuarioAdmin} title="Admin"/>
            </Link>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>


            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">


                    <li className="nav-item">
                            <Link className="nav-link" to='/adminAvisos'>Avisos</Link>
                    </li>


                    <li className="nav-item">
                            <Link className="nav-link" to='/msgPersonal'>Mensaje Personal</Link>
                    </li>


                    <li className="nav-item">
                            <Link className="nav-link" to='/'>Salir</Link>
                    </li>
                               
                </ul>

            </div>

            
            <div id='derechaLogo'> 
                <img id='imgLogoCoatepec' src={logo}/>
            </div>


        </div>
    </nav>   
</div>
  )
}

export default BarraAdmin
