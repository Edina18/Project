import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { config } from "../api/config";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

function MoviesComp() {
    const [movies, setMovies] = useState([]);
    const param = useParams();
    const [person, setPerson] = useState([]);

    useEffect(() => {
        const person = JSON.parse(localStorage.getItem("person"));
        if (person) {
            setPerson(person);
        }
        fetch(`${baseURL}person/${param.id}/combined_credits?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.cast);
            });
    }, []);

    return (
        <Row xs={1} md={4} className="g-4 ">
            {movies &&
                movies.map((movie, index) => {
                    return (
                        <>
                            {movie.poster_path && (
                                <Col className="col-sm d-flex" key={movie.id}>
                                    <Card
                                        className=""
                                        style={{
                                            border: "#212529",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <RouterLink to={`/movie/${movie.id}`}>
                                            <Card.Img
                                                variant="top"
                                                src={`${imgURL}${movie.poster_path}`}
                                                alt="movie"
                                            />
                                        </RouterLink>
                                        <Card.Body>
                                            <Card.Title
                                                style={{
                                                    background: "#212529",
                                                }}
                                            >
                                                Name:{movie.title}
                                            </Card.Title>
                                            <Card.Text className="align-items-start col-9">
                                                Release:{movie.release_date}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </>
                    );
                })}
        </Row>
    );
}

export default MoviesComp;
