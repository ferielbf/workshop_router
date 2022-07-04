import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get("https://movie-app-gmc.herokuapp.com/api/movies/" + id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Button variant="outline-primary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Button variant="outline-warning" onClick={() => navigate("/")}>
        Home
      </Button>
      <Card className="p-5 movieCard" style={{ width: "85%" }}>
        <Card.Img height="500" variant="top" src={movie.imgUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.category}</Card.Text>
        </Card.Body>
        
        <Link to={`/Date/${movie.date}`}> <Card.Footer>{movie.date} </Card.Footer></Link>
      </Card>
    </div>
  );
}

export default Details;
