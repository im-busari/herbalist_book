import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './anom/Home/Home';
import ShopPage from './anom/Shop/';
import ProductDetails from './anom/Shop/Details';

import { Footer } from './layout/Footer/Footer';
import { Contacts } from './anom/Contacts/Contacts';
import { Basket } from './anom/Basket/Basket';

function App() {

  return (
    
    <Router>
      <div>
        
        <Switch>

          <Route exact path="/" component={ Home } />
          <Route exact path="/shop" component={ ShopPage } />
          <Route path="/shop/:id" component={ ProductDetails } />
          <Route path="/contacts" component={ Contacts } />
          <Route path="/basket" component={ Basket } />

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
