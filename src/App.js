import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import BlogList from './components/BlogList'
import BlogIdScreen from './screens/BlogIdScreen'

const App = () => {
  return (
    <Router>
      <Header />

        <div className="App">
          <Route path='/' component={BlogList} exact />
          <Route path='/:id' component={BlogIdScreen} exact />
        </div>
    </Router>
  );
}

export default App;
