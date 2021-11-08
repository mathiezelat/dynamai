import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import { About } from './pages/AcercaDe/About';
import { Participar } from './pages/participar/Participar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BtnWsp from './components/BtnWsp';
import Donar from './pages/Donar';
import Novedades from './pages/Novedades';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <BtnWsp />  
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/acerca'>
         <About />
        </Route>

        <Route path='/organizacion'>
         <Participar image='img/participar/participarInstitucion.png' grupo='organizacion' />
        </Route>

        <Route path='/instituciones'>
         <Participar image='img/participar/participarPrivado.png' grupo='instituciones' />
        </Route>

        <Route path='/voluntariado'>
         <Participar image='img/participar/participarVoluntario.png' grupo='voluntariado'/>
        </Route>

        <Route path='/novedades'>
          <Novedades />
        </Route>
        
        <Route path='/contacto'>
          <Error404 />
        </Route>

        <Route path='/donar'>
          <Donar />
        </Route>

        <Route path='*'>
          <Error404 />
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
