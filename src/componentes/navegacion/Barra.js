import React from 'react';
import {Link, link} from 'react-router-dom';
import usuarioAdmin from '../../imagenes/usuarioAdmin.png';
import "../hojasEstilos/imagenes.css";
import logo from '../../imagenes/logo.png';

const Barra = () => {
  return (
    <div>
             <nav className="navbar navbar-expand-lg bg-body-tertiary">


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
                                 <Link className="nav-link" to='/'>INICIO</Link>
                            </li>


                            <li className="nav-item">
                                 <Link className="nav-link" to='/avisos'>Avisos</Link>
                            </li>


                            <li className="nav-item">
                                 <Link className="nav-link" to='/contactos'>Contactos</Link>
                            </li>


                            <li className="nav-item">
                                 <Link className="nav-link" to='/sugerencias'>Sugerencias</Link>
                            </li>
                            
                            
                            <li className="nav-item">
                                 <Link className="nav-link" to='/accesibilidad'>AccesibIlidad</Link>
                            </li>


                            <li className="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to='/ayuda' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ayuda
                                </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/preguntas'>Preguntas frecuentes</Link></li>
                                <li><Link className="dropdown-item" to='/atencion'>Atención al usuario</Link></li>
                            </ul>
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

export default Barra
