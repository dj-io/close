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
          {/* <Route path='/home' component={Home} />
          <Route path='/find' component={Find} />
          <Route path='/share' component={Share} /> */}
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
