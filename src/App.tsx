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
    </React.Fragment>
  );
}

export default App;
