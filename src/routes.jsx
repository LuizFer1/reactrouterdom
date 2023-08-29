
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Componentes/menu';
import Inicio from './inicio';
import Sobremim from './sobremim';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Menu />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/sobremim' element={<Sobremim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
