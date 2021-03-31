import React,{useState} from 'react'; 
import Second from './Second';
import Movie from './Movie';
const MovieList = () =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry potter',
            price:'$20'
        },
        {
            name: 'Game of Thrones',
            price:'$30'
        }
    ]);
    return(
        <div>
            {movies.map(movie=>(
                <Movie name={movie.name}></Movie>
            ))} 
        </div>
    )
}
export default MovieList;