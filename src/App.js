import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './componenents/pages/Home';
import EditPost from './componenents/pages/EditPost';
import EditForm from './componenents/pages/EditForm';
import NewPost from './componenents/pages/NewPost';
import PostView from './componenents/pages/PostView';
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
            <Route path="/" exact component= { Home }/>
            <Route path="/edit/:id"  component= { EditPost }/>
            <Route path="/edit"  component= { EditForm }/>
            <Route path="/newpost" component={ NewPost} />
            <Route path="/postview/:id" component={ PostView} />
            <Route path="" component={ NotFound} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
