import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PageInicio from './components/PageInicio';
import PageDeportes from './components/PageDeportes';
import PageEquipos from './components/PageEquipos';
import PageEventos from './components/PageEventos';
import PageEventosUsuarios from './components/PageEventosUsuarios';
import PageUsuarios from './components/PageUsuarios';
import MenuInicial from './components/MenuInicial';
import PageLogin from './components/PageLogin';
import PageSignin from './components/PageSignin';
import Cookies from 'universal-cookie';

//import {Civil} from './components/Civil';
const cookies = new Cookies();

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <MenuInicial />
          <Routes>
            <Route path="/" element={<PageInicio />} />
            <Route path="/PageLogin" element={<PageLogin />} />
            <Route path="/PageSignin" element={<PageSignin />} />
          {
              
              cookies.get("usu_nombres")=='admin'? 
                [
                  
                  <Route path="/PageEventos" element={<PageEventos />} />,
                  <Route path="/PageUsuarios" element={<PageUsuarios />} />,
                  <Route path="/PageDeportes" element={<PageDeportes />} />,
                  <Route path="/PageEquipos" element={<PageEquipos />} />
                ]
                :
                cookies.get("usu_nombres")?
                [
                  
                  <Route path="/PageEventos" element={<PageEventos />} />,
                  <Route path="/PageEventosUsuarios" element={<PageEventosUsuarios />} />                  
                  
                ]
                : <Route path="/PageLogin" element={<PageLogin />} />

                
            }





            
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

/*MENU SIN PERMISOS<Router>
        <Menu />
        <Routes>
          <Route path='/' component={PageInicio}></Route>
          <Route path='/PageInicio' element={<PageInicio />}></Route>
          <Route path='/PageDeportes' element={<PageDeportes />}></Route>
          <Route path='/PageEquipos' element={<PageEquipos />}></Route>
          <Route path='/PageEventos' element={<PageEventos />}></Route>
          <Route path='/PageSesion' element={<PageSesion />}></Route>
          <Route path='/PageUsuarios' element={<PageUsuarios />}></Route>
        </Routes>
      </Router>*/  


