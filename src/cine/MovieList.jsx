import React from 'react';
import { getAllMovies } from "../data/movies";
import { getImgUrl } from '../utils/cine-utility';

const MovieList = () => {
    const movies = getAllMovies();
    console.log(movies);

    return (
        <div className='grid place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-7'>
            {
                movies.map(movie => (
                    <figure id={movie.id} class="p-4 border border-black shadow-sm dark:border-white/10 rounded-xl">
						<img class="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
						<figcaption class="pt-4">
							<h3 class="text-xl mb-1">{movie.title}</h3>
							<p class="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
							<div class="flex items-center space-x-1 mb-5">
								<img src="./assets/star.svg" width="14" height="14" alt="" />
								<img src="./assets/star.svg" width="14" height="14" alt="" />
								<img src="./assets/star.svg" width="14" height="14" alt="" />
								<img src="./assets/star.svg" width="14" height="14" alt="" />
								<img src="./assets/star.svg" width="14" height="14" alt="" />
							</div>
							<a class="bg-[#39e1aa] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
								href="#">
								<img src="./assets/tag.svg" alt="" />
								<span>${movie.price} | Add to Cart</span>
							</a>
						</figcaption>
					</figure>
                ) )
            }

        </div>
    );
};

export default MovieList;