import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";//Switch

// Components
import Nav from "./components/Nav";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <main className="AppContainer">
        <Nav/>

        {/*Could work without "exact", leaving "Switch" wrap & putting the "/" last. Stops after a match*/}
        {/*<Switch>*/}
          <Route path="/" exact component={ HomePage }/>
          <Route path="/about" component={ AboutPage }/>
          <Route path="/shop" exact component={ ShopPage }/>
          <Route path="/shop/:id" component={ ArticlePage }/>
        {/*</Switch>*/}
      </main>
    </Router>
  );
};

export default App;