import Carousel from "react-bootstrap/Carousel";
import { config } from "../api/config";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function ControlledCarousel() {
    const baseURL = config.apiBaseUrl;
    const apiKey = config.apiKey;
    const imgURL = config.ImageBaseUrl;

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`${baseURL}movie/upcoming?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {movies.map((movie) => (
                <Carousel.Item key={movie.id}>
                    <RouterLink to={`/movie/${movie.id}`}>
                        <img
                            className="d-block w-100"
                            style={{ height: "750px", borderRadius: "10px" }}
                            src={`${imgURL}${movie.poster_path}`}
                            alt="slide"
                        />
                    </RouterLink>
                    <Carousel.Caption>
                        <p>{movie.realease_date}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;
