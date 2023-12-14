import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { config } from "../api/config";
import { Link as RouterLink } from "react-router-dom";

const imgURL = config.ImageBaseUrl;

const MovieList = (props) => {
    return (
        <Row xs={1} md={4} className="g-4 ">
            {props.movies.map((movie) => (
                <>
                    {movie.poster_path && (
                        <Col className="col-sm d-flex" key={movie.id}>
                            <Card className="" style={{ border: "#212529" }}>
                                <RouterLink to={`/movie/${movie.id}`}>
                                    <Card.Img
                                        variant="top"
                                        src={`${imgURL}${movie.poster_path}`}
                                        alt="movie"
                                    />
                                </RouterLink>
                                <Card.Body>
                                    <Card.Title
                                        className="col-sm d-flex shadow-lg rounded"
                                        style={{
                                            color: "azure !important",
                                            background: "#212529 !important",
                                        }}
                                    >
                                        {movie.title}
                                    </Card.Title>
                                    <Card.Text className="align-items-start col-9">
                                        {movie.release_date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </>
            ))}
        </Row>
    );
};

export default MovieList;
