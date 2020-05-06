import React from 'react';
import homePage from './pages/homePage';
import cartPage from './pages/cartPage';
import notFound from './pages/notFound';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return(
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className="page-container">
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={homePage}></Route>
          <Route exact path="/cart" component={cartPage}></Route>
          {/* <Route component={notFound}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
