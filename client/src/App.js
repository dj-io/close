import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Post } from './components/profile/Post.tsx';
import { Signup, Signin, Nav, Profile, Home, Find, Share, SignOut } from './components/index.ts';
import Friends from './components/find/Friends.tsx';
import { Protected } from './common/api/auth/Protected.tsx';
import { useEffect } from 'react';
import { find } from './common/api/user/Users.Api.ts';


const App = ({
  hasAccount,
  profiles,
  user,
  token,
  username,
  following
}) => {

  const loggedIn = user && token;

  const getProfile = async () => {
    if (token) {
      const profile = await find(username);
      if (profile.status === 200) profiles(profile.data);
    }
  }

  useEffect(() => {
    getProfile();
  }, [token])

  return (
    <div className="App">
      <Router >
        {loggedIn && <Nav user={user} />}
        {loggedIn && <Find />}
        {loggedIn && <SignOut />}
        <Routes>
          <Route exact path='/' element={hasAccount ? <Signin /> : <Signup />} />
          <Route element={<Protected hasAccount={hasAccount} />}>
            <Route exact path='/home' element={<Home />} />
            <Route key='home-post' path='/home/:post' element={<Post currentUser={user} />} />
            <Route path='/share' element={<Share />} />
            <Route path='/profile/:profileId' element={<Profile />} />
            <Route key='profile-post' exact path='/user/:post' element={<Post currentUser={user} />} />
            <Route exact path='/:name' element={<Friends currentUser={user} profiles={profiles} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
