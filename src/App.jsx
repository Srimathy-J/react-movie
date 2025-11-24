import { useState } from 'react'
import './App.css'
import Navbar from "./Pages/Navbar.jsx"; // Corrected path
import Home from './pages/Home.jsx'
import WatchList from './pages/WatchList.jsx'
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
       <Navbar/>
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