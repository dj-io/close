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
        <Find />
        <Routes>
          <Route exact path='/' element={hasAccount ? <Signin /> : <Signup />} />
          <Route path='/home' element={<Home />} />
          <Route key='home-post' exact path='/home/:post' element={<Post />} />
          {/* <Route path='/share' element={<Share />} /> */}
          <Route path='/profile/:profileId' element={<Profile />} />
          <Route key='profile-post' exact path='/user/:post' element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
