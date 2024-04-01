import React from "react";
import NavBar from "./page/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./page/Home";

const App: React.FC = () => {
  const handleSearch = (query : string) => {
    console.log('Realizar busqueda', query)
  }
  return (
    <React.Fragment>
    <header>
      <NavBar onSearch={handleSearch}/>
    </header>
    <body>
      <Home/>
    </body>
    <footer>
      <h6 className="navbar-color" style={{color:'#fff'}}>Maldita API no deja consumir más de 
      10 veces obligandote a cambiarla, esta prueba fue realizada a base de usar MOCK,
       una vez tengamos una forma de acceder a la API con menos limitaciones se modificará para poder consumir todos los endpoints, de antemano, todo bien zozio</h6>
    </footer>
    </React.Fragment>
  );
}

export default App;
