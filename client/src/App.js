//import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import NewPirate from './views/NewPirate';
import Detail from './components/Detail';

function App() {
  return (
    <div style={{marginLeft: 210, padding: 20}}>
      <Router>
      <Home path="/"/>
      <NewPirate path="/api/new"/>
      <Detail path="/api/pirate/:id"  />
      </Router>
    </div>
  );
}

export default App;
