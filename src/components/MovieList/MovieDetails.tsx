import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const MovieDetails = () => {
    const {id} = useParams();
    const [movie,setMovie] = useState(null);
    const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then((response) => {setMovie(response.data)});
    },[id])

  return (
    <Container>
      <Typography variant="h4">{movie.title}</Typography>
    </Container>
  )
}

export default MovieDetails
