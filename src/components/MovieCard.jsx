import { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'
function MovieCard({movie} ){
    

    const {toggleWatchlist, watchList} = useContext(WatchListContext);
    const inWatchList = watchList.some(m => m.id == movie.id)
    return (
        <>
        <div>
          <div className='bg-gray-800 p-4 rounded-lg shadow-md text-white relative border border-purple-500 shadow-purple-900 hover:scale-[1.02] transition-all'>
            <img className='w-full h-80 object-contain rounded-sm' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3 className='text-lg font-bold mt-4'>{movie.title} </h3>
            <p className='text-sm text-gray-400'>{movie.release_date}</p>
            <button className='absolute top-2 right-2 text-red-600 text-xl' onClick={()=> toggleWatchlist(movie)}>
                {inWatchList ? <FaHeart/>:<FaRegHeart/>}
            </button>
          </div>
        </div>
        </>
    )
}

export default MovieCard