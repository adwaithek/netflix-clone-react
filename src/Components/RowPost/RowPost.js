import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import { API_KEY } from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [UrlId,setUrlId]=useState('')


  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>
      alert('error'))
  },[])



  const opts={
    height:'390',
    width:'100%',
    playerVars:{

      autoplay:1,
    }

  }
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>{
            return(
              <img  onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="" className=  {props.isSmall? 'small_poster' :'poster' }  />

            )


          })}
            

        </div>
        {UrlId &&
        <    YouTube opts={opts} videoId={UrlId.key} />}
    </div>
  )
}

export default RowPost