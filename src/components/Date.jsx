import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Row, Col,Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';

function CustomFilter() {
    const { date } = useParams()
    const navigate = useNavigate();

    const { movie, setMovie } = useState({})
    useEffect(() => {
        axios
            .get("https://movie-app-gmc.herokuapp.com/api/movies/" + date)
            .then((res) => setMovie(res.data))
            .catch((err) => console.error(err));
    }, [])
    return (
        <div>
             <Row xs={1} md={3} className="g-4">
            {movies?.filter(el => el.title.toLowerCase().includes(search.toLowerCase()) ).map(el=>  (
              <Col>
                <Card>
                  <Link to={`/movie/${el._id}`}><Card.Img height="450" variant="top" src={el.imgUrl} /></Link>
                  
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                      {el.description}
                     
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className='d-flex justify-content-center'>
                  <ReactStars
                        value={el.rate}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        <Link to={`/movies/${movie._id}`}> <Card.Footer>{movie.date} </Card.Footer></Link>
      <Card/>
        </div>
    )
}

export default CustomFilter