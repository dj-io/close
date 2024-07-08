import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Protected } from './common/api/auth/Protected.tsx';
import { find } from './common/api/user/Users.Api.ts';
import Friends from './pages/find/Friends.tsx';
import {
	Find,
	Home,
	Nav,
	Profile,
	Share,
	SignOut,
	Signin,
	Signup,
} from './pages/index.ts';
import { Post } from './pages/profile/Post.tsx';

const App = ({ hasAccount, profiles, user, token, username, following }) => {
	const loggedIn = user && token;

	const getProfile = async () => {
		if (token) {
			const profile = await find(username);
			if (profile?.status === 200) profiles(profile.data);
		}
	};

	useEffect(() => {
		getProfile();
	}, [username]);

	return (
		<div className="App">
			<Router>
				{loggedIn && <Nav user={user} />}
				{loggedIn && <Find />}
				{loggedIn && <SignOut />}
				<Routes>
					<Route
						exact
						path="/"
						element={hasAccount ? <Signin /> : <Signup />}
					/>
					<Route element={<Protected hasAccount={hasAccount} />}>
						<Route exact path="/home" element={<Home />} />
						<Route
							key="home-post"
							path="/home/:post"
							element={<Post currentUser={user} profiles={profiles} />}
						/>
						<Route path="/share" element={<Share />} />
						<Route path="/profile/:profileId" element={<Profile />} />
						<Route
							key="profile-post"
							exact
							path="/user/:post"
							element={<Post currentUser={user} profiles={profiles} />}
						/>
						<Route
							exact
							path="/:name"
							element={<Friends currentUser={user} profiles={profiles} />}
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
