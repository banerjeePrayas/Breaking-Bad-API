import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import CharacterIdScreen from './screens/CharacterIdScreen'

const App = () => {
  return (
    <Router>
      <Header />

        <div className="App">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/:id' component={CharacterIdScreen} exact />
        </div>
    </Router>
  );
}

export default App;
