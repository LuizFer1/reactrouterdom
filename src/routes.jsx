
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Componentes/menu';
import Inicio from './paginas/inicio';
import Sobremim from './paginas/sobremim';
import Rodape from 'Componentes/rodape';
import PaginaPadrao from 'Componentes/PaginaPadrao';
import Post from './paginas/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>

          <Route path='/' element={<Inicio />}/>
          <Route path='/sobremim' element={<Sobremim />} />
          <Route path='/posts/:id' element={<Post/>} />
        </Route>

      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
