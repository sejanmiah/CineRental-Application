import React from 'react';
import { getAllMovies } from "../data/movies";
import MovieCard from './MovieCard';


const MovieList = () => {
    const movies = getAllMovies();

    return (
        <div className='grid place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-7'>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ) )
            }

        </div>
    );
};

export default MovieList;