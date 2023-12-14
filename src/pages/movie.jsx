import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { config } from "../api/config";
import { useParams } from "react-router-dom";
import MoviePeopleComp from "../components/MoviePeopleComp.jsx";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

export const Movie = () => {
    const [movie, setMovie] = useState([]);
    let { id } = useParams();
    id = decodeURI(id);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        // const movie = JSON.parse(localStorage.getItem("movie"));
        // if (movie) {
        //   setMovie(movie);
        // }
        fetch(`${baseURL}movie/${id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
                setGenres(data.genres);
            });
    }, [id]);

    return (
        <Container>
            <Row className="movie">
                <h3 style={{ color: "azure" }}>{movie.title}</h3>
                <div className="genres d-flex ">
                    {genres &&
                        genres.map((genre) => {
                            return (
                                <p className="p-2" style={{ color: "azure" }}>
                                    {genre.name}
                                </p>
                            );
                        })}
                </div>
                <Col sm={5}>
                    <Card className="poster">
                        {""}
                        <Card.Img
                            variant="top"
                            src={`${imgURL}${movie.poster_path}`}
                            alt="movie"
                        />
                    </Card>
                </Col>
                <Col className="d-flex" sm={5}>
                    <div>
                        {["dark"].map((variant) => (
                            <Alert key={variant} variant={variant}>
                                <p>Release date:{movie.release_date}</p>
                                <p>Language:{movie.original_language}</p>
                                <p>Popularity:{movie.popularity}</p>
                                <p>Overview:{movie.overview}</p>
                            </Alert>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <h3 className=" p-5" style={{ color: "azure" }}>
                    Actors
                </h3>
                <Col>
                    <MoviePeopleComp />
                </Col>
            </Row>
        </Container>
    );
};
