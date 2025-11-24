import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard.jsx'

function Home(){

    const [movies, setMovies]=useState([])
    const [page, setPage]=useState(1)
    const [search, setSearch]=useState("")

    useEffect(()=>{
        let url =`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=e1405685f45aaa1d533717b7ef904296`

        if(search){
           url =`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=e1405685f45aaa1d533717b7ef904296`
        }
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>setMovies(data.results))
    },[page, search])
    return (
        <>
        <div className="p-4 pt-20  bg-gradient-to-b from-slate-900 via-blue-900/60 to-slate-950 min-h-screen">
            <input type="text" placeholder="Search Movies..." className="p-2 mt-4 w-3/4 md:w-1/2 border focus:outline-none rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10" onChange={(e)=>setSearch(e.target.value)} />

            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {movies.map((movie)=>{
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </div>
                <div className="pagination-container flex items-center justify-between mt-5">
                    <button disabled={page == 1} onClick={()=>{
                        setPage(prev => prev-1)
                    }} className='p-2 bg-gray-700 text-white rounded'>Previous</button>
                    <button onClick={()=>{
                        setPage(prev => prev+1)
                    }} className='p-2 bg-gray-700 text-white rounded'>Next</button>
                </div>
        </div>
        </>
    )
}

export default Home