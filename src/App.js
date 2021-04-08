import './navbar';
import './home';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Create from './create'
import BlogDetails from './BlogDetais';
import Login from './login'
import Signup from './signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
          <Route  path="/create">
              <Create />
            </Route>
            <Route  path="/blogs/:id">
            <BlogDetails/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/login">
              <Login/>
            </Route>
            <Route  path="/signup">
              <Signup/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
