import React from 'react';
import { getAllOneArtists, getRelatedArtists } from '../lib/spotify';

const Login = () => {
	//console.log(getAllOneArtists);
	//console.log(artist.body.items);
	// console.log(getAllOneArtists.);
	getAllOneArtists('travis scott');
	//getRelatedArtists('travis scott');
	return (
		<body action='/users/login' className='min-h-screen bg-black'>
			<div className='flex h-screen w-screen justify-center items-center'>
				<h1 className=' text-purple-900 font-bold text-5xl'>
					Connect To Spotify
				</h1>
				<a
					href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${'3e7db903f93e4fde9d8fb3a0fb80c280'}&scope=playlist-modify-public%20playlist-read-private%20user-read-private&redirect_uri=${'http://localhost:3000/callback'}`}
					className=' flex mt-36  border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200'
				>
					Click Here
				</a>
			</div>
		</body>
	);
};

export default Login;
