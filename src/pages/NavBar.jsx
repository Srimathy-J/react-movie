import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'


function Navbar(){
  const {watchList}= useContext(WatchListContext)
    return (
        <>
          <nav className='bg-gray-900 p-4 text-white flex justify-between items-center fixed w-full top-0 shadow-sm shadow-blue-950 z-10 '>
            <Link to="/" className='text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent  drop-shadow-lg transform hover:scale-105 transition-all'>MoviesWorld</Link>
            <Link to ="/watchlist" className='text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-all'>WatchLater({watchList.length}) </Link>
          </nav>
        </>
    )
}

export default Navbar