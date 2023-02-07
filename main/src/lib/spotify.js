import { spotifyApi } from '../App';

// )
// export async function getAllTracksInAPlaylist(link) {
// 	try {
// 		const data = await spotifyApi.getPlaylistTracks(link);
// 		return data.body.items;
// 	} catch (err) {
// 		return err;
// 	}
// }
// export async function getAllOneArtists(artist) {
// 	try {
// 		const data = await spotifyApi.getArtist(artist, {
// 			limit: 1,
// 			offset: 0,
// 		});
// 		console.log(data);
// 	} catch (err) {
// 		console.log('error');
// 	}
// }
export async function getAllOneArtists(artist) {
	try {
		const data = await spotifyApi.getArtist(artist);
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
// spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy').then(
// 	function (data) {
// 		console.log(data.body);
// 	},
// 	function (err) {
// 		done(err);
// 	}
// );
// export async function getRelatedArtists(artist) {
// 	try {
// 		const data = await spotifyApi.getArtistRelatedArtists(artist);
// 		console.log(data.body);
// 	} catch (err) {
// 		console.log('error');
// 	}
// }
