import { React, Fragment } from 'react';

import './App.css';
import { Testimonio } from './componentes/Testimonio.jsx';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestro alumnos sobre freeCodeCamp yeaaaaaaaaaaaasdasdasdsadasd</h1>
        <Testimonio 
        nombre='Emma Bostian'
        pais='Sweden'
        imagen='emma'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio= {<Fragment>sd sd fasd fsad fasd fsadfdsfsdfsd <strong>Con negrita</strong></Fragment>} />
      </div>
      <Testimonio 
        nombre='Maria sarah'
        pais='Sweden'
        imagen='sarah'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio= {<Fragment>sdfsadfafsf <strong>asksjfksfj </strong></Fragment>} />
  <Testimonio 
        nombre='Pedro shawn'
        pais='Sweden'
        imagen='shawn'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio='Soy muy itelidfldskjfsdalfj sdkl fsadlkfjsdñlkfjsdkl fjsda fjsdakf dskñ fsdjñkl fjñksadñlkjfsdljkñ fslkj flkjñs dañlkjfslkñjfsdlkjñ slkdfkjsdalkf sdlkjñ falkdslkjaslkjñfklñjl' />
    </div>
  );
}

export default App;
