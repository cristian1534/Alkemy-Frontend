import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './componenents/pages/Home';
import Edit from './componenents/pages/Edit';
import NewPost from './componenents/pages/NewPost';
import NotFound from './componenents/pages/NotFound';
import NavBar from './componenents/pages/layout/NavBar';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component= { Home }/>
            <Route path="/edit"  component= { Edit }/>
            <Route path="/newpost" component={ NewPost} />
            <Route path="" component={ NotFound} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
