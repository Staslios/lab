import './App.css';
import { Router, Route, lazy, LocationProvider } from "preact-iso";

const Home = lazy(() => import("./pages/home/Home.js"));
const About = lazy(() => import("./pages/about/About.js"));

const App = () => {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </LocationProvider>
  );
};

export default App;