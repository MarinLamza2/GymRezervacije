import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import NavBarEdunova from './components/NavBarEdunova';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import GrupePregled from './pages/grupe/GrupePregled';
import GrupeDodaj from './pages/grupe/GrupeDodaj';
import GrupePromjena from './pages/grupe/GrupePromjena';


function App() {

  return (
    <>
    <Container>
      <NavBarEdunova />
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna/>} />

        <Route path={RouteNames.GRUPAPREGLED} element={<GrupePregled/>}/>
        <Route path={RouteNames.GRUPANOVI} element={<GrupeDodaj/>}/>
        <Route path={RouteNames.GRUPAPROMJENA} element={<GrupePromjena/>}/>

      </Routes>
      <hr/>
      &copy; Edunova
    </Container>
    
    </>
  )
}

export default App
