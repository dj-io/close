import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Post } from './components/home/Post.tsx';
import { Signup, Signin, Nav, Profile, Home, Find } from './components/index.ts';

function App({ hasAccount }) {

  console.log("=== yuppp ===", hasAccount)
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route exact path='/' element={hasAccount ? <Signin /> : <Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/posts/:post' element={<Post />} />
          <Route path='/find' element={<Find />} />
          {/* <Route path='/share' element={<Share />} /> */}
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
