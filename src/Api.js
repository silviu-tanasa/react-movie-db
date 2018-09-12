import axios from 'axios'
import { IMDBApiKey } from "./AppConfig"

const IMDBApiUrl = "http://imdbapi.net/api";
const MovieApiUrl = "http://localhost:5000/movies"

export function getMovies() {
    return axios.get(MovieApiUrl);
}

export function searchMovie(term) {
    return axios.post(IMDBApiUrl, {
        key: IMDBApiKey,
        title: term
    })
}

export function createMovie(movie) {
    return axios.post(MovieApiUrl, movie)
}
// DELETE /movie/<movie_id>
export function deleteMovie(id) {
    console.log('API method hit')
    return axios.delete(`${MovieApiUrl}/${id}`)
}