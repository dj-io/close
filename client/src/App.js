import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Post } from './components/home/Post.tsx';
import { Signup, Signin, Nav, Profile, Home, Find } from './components/index.ts';
import './App.css';


function App({ hasAccount }) {

  console.log("=== yuppp ===", hasAccount)
  return (
    <div className="App">
      <Router >
        <Nav />
        <Routes>
          <Route exact path='/' element={hasAccount ? <Signin /> : <Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:post' element={<Post />} />
          <Route path='/find' element={<Find />} />
          {/* <Route path='/share' element={<Share />} /> */}
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
