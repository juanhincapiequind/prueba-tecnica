import React from "react";
import NavBar from "./page/NavBar";

import LandingPage from "./page/LandingPage";
import { places } from "./models/PlacesModel";

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
      <LandingPage places={places}/>
    </body>
    </React.Fragment>
  );
}

export default App;
