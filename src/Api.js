import axios from 'axios'
import { IMDBApiKey } from "./AppConfig"

const IMDBApiUrl = "http://imdbapi.net/api";

export function getMovies() {
    return axios.get('http://localhost:5000/movies');
}

export function searchMovie(term) {
    return axios.post(IMDBApiUrl, {
        key: IMDBApiKey,
        title: term
    })
}