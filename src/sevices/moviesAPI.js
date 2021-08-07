// //API_KEY: cbd2a765b630d208292bf9b6494e08b5
// import axios from "axios";

// const API_KEY = 'cbd2a765b630d208292bf9b6494e08b5';
// const BASE_URL = 'https://api.themoviedb.org/3/';

// const fetchMovies = {

//     getTrending() {
//         return axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
//             .then(response => response.data.results)
//             .catch(error => error);
//     },

//     searchMovies(searchQuery) {
//         return axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`)
//             .then(response => response.data.results)
//             .catch(error => error);
//     },

//     getDetails(id) {
//         return axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
//             .then(response => response.data.results)
//             .catch(error => error);
//     },

//     getActors(id) {
//         return axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
//             .then(response => response.data.results)
//             .catch(error => error);
//     },

//     getReviews(id) {
//         return axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
//             .then(response => response.data.results)
//             .catch(error => error);
//     },

//     //${BASE_URL}trending/all/day?api_key=${API_KEY}   get trending
//     //${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false   search movies
//     //${BASE_URL}movie/{movie_id}?api_key=${API_KEY}&language=en-US   get movie details
//     //${BASE_URL}movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US   get movie actors
//     //${BASE_URL}movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1   get movie reviews
// }

// export default fetchMovies;
