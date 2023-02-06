import React, { useEffect ,useState} from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
function Banner() {
  
  const [movie,setMovie]=useState()
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data.results[0])
    setMovie(response.data.results[
    Math.floor (Math.random()*response.data.results.length-1)
    ])

    
})
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title :''}</h1>
        <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
        </div>
        <h1 className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum mollitia ab similique nam maiores libero! Eligendi, in sit culpa natus mollitia officiis esse enim qui amet atque explicabo nihil consectetur.</h1>
        </div>
        <div className="fade_bottom"> </div>
    </div>
  )
}

export default Banner