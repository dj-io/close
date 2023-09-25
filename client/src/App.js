import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Post } from './components/profile/Post.tsx';
import { Signup, Signin, Nav, Profile, Home, Find, Share } from './components/index.ts';
import './App.css';
import { useEffect } from 'react';
import { retreiveProfile } from './common/api/user/Users.Api.ts';
import Friends from './components/find/Friends.tsx';


const App = ({ hasAccount, profiles, user, returnFind, foundUser }) => {

  const getProfile = async () => {
    const res = await retreiveProfile(2);
    profiles(res.data);
  }


  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div className="App">
      <Router >
        <Nav user={user} />
        <Find />
        <Routes>
          <Route exact path='/' element={hasAccount ? <Signin /> : <Signup />} />
          <Route path='/home' element={<Home />} />
          <Route key='home-post' exact path='/home/:post' element={<Post currentUser={user} />} />
          <Route path='/share' element={<Share />} />
          <Route path='/profile/:profileId' element={<Profile />} />
          <Route key='profile-post' exact path='/user/:post' element={<Post currentUser={user} />} />
          <Route exact path='/:name' element={<Friends currentUser={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
