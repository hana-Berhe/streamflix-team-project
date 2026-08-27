import React, { useEffect, useState } from 'react'
import SlideShow from '../SlideShow/SlideShow'
// import {movies} from '../../Data/Data'
import movieInstance from '../../Utility/MovieInstance.js'
import requests from '../../utility/requestUrls.js'
export default function DisplayRow() {
  // this is where we will fetch the data from the api and store it in the state and then pass it to the SlideShow component
  const [movies,setMovies]=useState({
        Trending:[],
        NetflixOriginals:[],
        TopRatedMovies:[],
        ActionMovies:[],
        ComedyMovies:[],
        HorrorMovies:[],
        RomanceMovies:[], 
        Documentaries:[] 

  })
  // this useEffect will run only once when the component is mounted and will call the fetchMovies function
  useEffect(()=>{
    fetchMovies()
  },[])
// this function will fetch the data from the api and store it in the state  
const fetchMovies = async () => {
  try {
    const [trendingRes, netflixRes, topRatedRes, actionRes, comedyRes,horrorRes, romanceRes, docRes] = await Promise.all([

      movieInstance.get(requests.fetchTrending),
      movieInstance.get(requests.fetchNetflixOriginals),
      movieInstance.get(requests.fetchTopRatedMovies),
      movieInstance.get(requests.fetchActionMovies),
      movieInstance.get(requests.fetchComedyMovies),
      movieInstance.get(requests.fetchHorrorMovies),
      movieInstance.get(requests.fetchRomanceMovies),
      movieInstance.get(requests.fetchDocumentaries)

    ])
    setMovies({
        Trending:trendingRes.data.results,
        NetflixOriginals:netflixRes.data.results,
        TopRatedMovies:topRatedRes.data.results,
        ActionMovies:actionRes.data.results,
        ComedyMovies: comedyRes.data.results,
        HorrorMovies:horrorRes.data.results,
        RomanceMovies:romanceRes.data.results, 
        Documentaries:docRes.data.results 
    })
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className='mainWrapper'>
        <SlideShow title="Movie suggestion" movies={movies.Trending}/>
        <SlideShow title="Popular on netflix" movies={movies.NetflixOriginals}/>
        <SlideShow title="Top Rated" movies={movies.TopRatedMovies}/>
        <SlideShow title="Action" movies={movies.ActionMovies}/>
    </div>
  )
}