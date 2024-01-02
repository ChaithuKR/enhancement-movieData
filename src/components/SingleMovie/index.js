import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

import './index.css'

const SingleMovie = () => {
  const {id} = useParams()
  const [movieDetails, setMovieDetails] = useState()
  const [castDetails, setCast] = useState()
  const [crew, setCrew] = useState()

  useEffect(() => {
    const getData = async () => {
      const apiKey = '79126e66b5fe786f82e39d0c107bc44e'
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
      )
      const data = await response.json()
      setMovieDetails(data)
      console.log(data)
      const castResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
      )
      const castR = await castResponse.json()
      console.log(castR)
      setCast(castR.cast)
      setCrew(castR.crew)
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Movie {id}</h1>
      <h1>Movie Crew: </h1>
    </div>
  )
}

export default SingleMovie
