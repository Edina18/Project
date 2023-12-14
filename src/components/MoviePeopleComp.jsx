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

function Actor() {
    const [people, setPeople] = useState([]);
    const param = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const movie = JSON.parse(localStorage.getItem("movie"));
        if (movie) {
            setMovie(movie);
        }
        fetch(`${baseURL}movie/${param.id}/credits?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setPeople(data.cast);
            });
    }, []);

    return (
        <Row xs={1} md={4} className="g-4 ">
            {people &&
                people.map((person) => {
                    return (
                        <>
                            {person.profile_path && (
                                <Col className="col-sm d-flex" key={person.id}>
                                    <Card
                                        className=""
                                        style={{ border: "#212529" }}
                                    >
                                        <RouterLink to={`/actor/${person.id}`}>
                                            <Card.Img
                                                variant="top"
                                                src={`${imgURL}${person.profile_path}`}
                                                alt="actor"
                                            />
                                        </RouterLink>
                                        <Card.Body>
                                            <Card.Title
                                                style={{
                                                    background: "#212529",
                                                }}
                                            >
                                                Name: {person.name}
                                            </Card.Title>
                                            <Card.Text className="align-items-start col-9">
                                                Character: {person.character}
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

export default Actor;
