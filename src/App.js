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
        testimonio={`${<strong>con negrita</strong>} sin negrita`} />
      </div>
      <Testimonio 
        nombre='Maria sarah'
        pais='Sweden'
        imagen='sarah'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio='Soy muy itelidfldskjfsdalfj sdkl fsadlkfjsdñlkfjsdkl fjsda fjsdakf dskñ fsdjñkl fjñksadñlkjfsdljkñ fslkj flkjñs dañlkjfslkñjfsdlkjñ slkdfkjsdalkf sdlkjñ falkdslkjaslkjñfklñjl' />
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
