import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom'

function Movie({search}) {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
        .then(res => setMovies(res.data))
        .catch(err => console.error(err))
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
    </div>
  )
}

export default Movie