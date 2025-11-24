import { useState } from 'react'
import './App.css'
import NavBar from "./pages/NavBar.jsx";
import Home from './pages/Home.jsx'
import WatchList from './pages/Watchlist.jsx'
import MovieCard from './components/MovieCard.jsx'
import GenreFilter from './components/GenreFilter.jsx'

import {WatchListProvider} from './context/WatchListContext.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WatchListProvider>
     <BrowserRouter>
       <NavBar/>
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/watchlist' element={<WatchList/>} />
         </Routes>
     </BrowserRouter>
     </WatchListProvider>
    </>
  )
}

export default App