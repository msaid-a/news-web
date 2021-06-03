import logo from './logo.svg';
import './static/styles/tailwind.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ROUTE_PATH} from './Route/index'
import {AsyncPage, Layout} from './Component'
import Main from './view/Main'
import Search from './view/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const {HOME, SEARCH} = ROUTE_PATH

const ROUTES = [
  { path: HOME, exact: true, page: 'Main' },
  { path: SEARCH, exact: true, page: 'Search' }
]
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route 
              key={i}
              path={route.path}
              exact={route.exact}
              render={() => <AsyncPage page={route.page} /> }
            />
          ) )}
          <Route component={() => <p>Not Found</p>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
