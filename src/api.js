import axios from 'axois';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertMovie  = payload =>api.post('/movie', payload);
export const getAllMovies  = payload =>api.get('/movies');
export const updateMovieById  = (id, payload) =>api.put(`/movie/${id}`, payload);
export const deleteMovieById  = id =>api.delete(`/movie/${id}`);
export const getMovieById  = id =>api.get(`/movie/${id}`);
