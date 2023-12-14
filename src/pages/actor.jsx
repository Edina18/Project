import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { config } from "../api/config";
import { useParams } from "react-router-dom";
import MoviesComp from "../components/MoviesComp.jsx";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

export const Actor = () => {
    const [person, setPerson] = useState([]);
    let { id } = useParams();
    id = decodeURI(id);

    useEffect(() => {
        // const person = JSON.parse(localStorage.getItem("person"));
        // if (person) {
        //   setPerson(person);
        // }
        fetch(`${baseURL}person/${id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setPerson(data);
            });
    }, [id]);
    return (
        <Container>
            <Row className="">
                <h3 style={{ color: "azure" }}>{person.name}</h3>
                <div className="genres d-flex "></div>
                <Col sm={5}>
                    <Card className="" style={{ border: "#212529" }}>
                        <Card.Img
                            variant="top"
                            src={`${imgURL}${person.profile_path}`}
                            alt="actor"
                        />
                    </Card>
                </Col>
                <Col className="d-flex" sm={5}>
                    <div>
                        {["dark"].map((variant) => (
                            <Alert key={variant} variant={variant}>
                                <p>Birthday: {person.birthday}</p>
                                <p>Place of birth: {person.place_of_birth}</p>
                                <p>Popularity: {person.popularity}</p>
                                <p>IMDB ID: {person.imdb_id}</p>
                                <p>Biography: {person.biography}</p>
                                <p>Death Day: {person.deathday}</p>
                            </Alert>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <h3 className=" p-5" style={{ color: "azure" }}>
                    Movies
                </h3>
                <Col>
                    <MoviesComp />
                </Col>
            </Row>
        </Container>
    );
};
