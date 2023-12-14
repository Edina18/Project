import { useContext } from "react";
import { FavoritesContext } from "../Favorites/context";
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from "../Favorites/actions";
import { config } from "../api/config";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Favorites.css";

const imgURL = config.ImageBaseUrl;

export function Favorites() {
    const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

    function handleRemove(movieId) {
        const actionResult = removeFromFavorites(movieId);

        favoritesDispatch(actionResult);
    }

    return (
        <Container className="favorite-container" style={{ height: "87vh" }}>
            <Row xs={1} md={4} className="g-4 ">
                {favoritesState.movies.length === 0 ? (
                    <h1 className="empty-favorite" style={{ color: "azure" }}>
                        The favorites page is empty.
                    </h1>
                ) : (
                    favoritesState.movies.map((movie) => {
                        return (
                            <Col sm={5} className="col-sm d-flex">
                                <Card
                                    key={movie.id}
                                    className="col-sm d-flex"
                                    style={{
                                        background: "#212529",
                                        color: "azure",
                                    }}
                                >
                                    <img
                                        src={`${imgURL}${movie.image}`}
                                        alt="movie_image"
                                    />
                                    <h2 className="col-sm d-flex">
                                        {movie.title}
                                    </h2>
                                    <div
                                        className="delete-button"
                                        onClick={() => handleRemove(movie.id)}
                                    >
                                        Delete
                                    </div>
                                </Card>
                            </Col>
                        );
                    })
                )}
            </Row>
        </Container>
    );
}
