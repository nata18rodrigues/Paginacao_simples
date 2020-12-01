import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
 

import Buscar from "./componentes/Buscar";


function App () {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Buscar" />
          </Route>
          <Route exact path="/Buscar" component={Buscar} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
