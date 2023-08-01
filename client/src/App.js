import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup, Signin, Nav, Profile } from './components/index.ts';

function App({ hasAccount }) {

  console.log("=== yuppp ===", hasAccount)
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={hasAccount ? <Signin /> : <Signup />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/feed' component={Feed} />
          <Route path='/find' component={Find} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
