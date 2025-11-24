import { useContext, useState } from 'react'
import GenreFilter from '../components/GenreFilter.jsx'
import { WatchListContext } from '../context/WatchListContext.jsx'
import MovieCard from '../components/MovieCard.jsx'



function WatchList(){
    const {watchList, genreList} =useContext(WatchListContext)
    const [search, setSearch]=useState("")
    const [selectedGenre, setSelectedGenre]=useState("")

    const filteredMovies = watchList.filter((movie)=>
            movie.title.toLowerCase().includes(search.toLowerCase()) 
    ).filter(movie =>{
        return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
    })

    return (
        <>
        <div className='bg-gradient-to-b from-slate-900 via-blue-900/60 to-slate-950 w-full min-h-screen'>
        <div className="p-4 pt-20 ">
            <input type="text" placeholder="Search Movies..." className="p-2 w-3/4 md:w-1/2 border focus:outline-none mt-4 rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10" onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className='mt-16 flex justify-center items-center'>
                <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
            </div>
            <div className='mx-4'>
            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {filteredMovies.map((movie)=>{
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </div>
            </div>
            </div>
        </>
    )
}

export default WatchList