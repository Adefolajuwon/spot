import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Input from './components/Input';
import SpotifyWebApi from 'spotify-web-api-node';

//const SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
export const spotifyApi = new SpotifyWebApi({
	clientId: '3e7db903f93e4fde9d8fb3a0fb80c280',
	clientSecret: 'ad01bf399438474885bfbf42d521f7ee',
	redirectUri: 'http://localhost:3000/callback',
	refresh_token: '',
});
const App = () => {
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		const hash = window.location.hash;
		let tokenSet;
		if (hash) {
			tokenSet = hash
				.substring(1)
				.split('&')
				.find((elem) => elem.startsWith('access_token'))
				.split('=')[1];
			window.location.hash = '';
		}

		if (tokenSet === undefined || tokenSet === '' || tokenSet === null) return;
		spotifyApi.setAccessToken(tokenSet);
		setIsConnected(true);
	}, []);
	if (isConnected === true) {
		console.log('true');
	} else {
		console.log('false');
	}
	function logOut() {
		setIsConnected(false);
		window.location.reload();
	}
	return (
		<div>
			<Login />
			<Input />
		</div>
	);
};

export default App;
