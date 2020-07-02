import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './anom/Home/Home';
import Shop from './anom/Shop/Shop';

import { Footer } from './layout/Footer/Footer';
import { Contacts } from './anom/Contacts/Contacts';
import { Basket } from './anom/Basket/Basket';

function App() {

  return (
    
    <Router>
      <div>
        
        <Switch>

          <Route exact path="/" component={ Home } />
          <Route path="/shop" component={ Shop } />
          <Route path="/contacts" component={ Contacts } />
          <Route path="/basket" component={ Basket } />

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
