import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../img/—Pngtree—movie board icon_4751062.png';
import { useState, useEffect } from "react";
import { config } from "../api/config";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import { useAuth0 } from "@auth0/auth0-react";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;



function NavScrollExample() {

  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');
const { loginWithRedirect, logout,user, isAuthenticated } = useAuth0();

//   const handleLogout = () => {
//     logout(auth).then(() => {
//     }).catch((error) => {
//       console.log(error);
//     });
//   }

  const searchMovie = async (query) => {
    try {
      const url = `${baseURL}search/movie?api_key=${apiKey}&query=${query}`
      const res = await fetch(url);
      const data = await res.json();
      setSearch(data.results);

    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // loginWithRedirect( (user) => {
    //   if (user) {
    //     console.log("user is logged in");
    //     isAuthenticated(true);
    //   } else {
    //     // User is logged out
    //     console.log("user is logged out");
    //     isAuthenticated(false);
    //   }
    // });
    searchMovie(query);
  }, [query]);

  return (

    <>
      <Navbar expand="lg" style={{background:'#212529', color:'azure'}}>
        <Container fluid>
          <Navbar.Brand href="/"><img className='Logo d-block w-50' src={img1} alt="Logo" style={{ maxHeight: '100px',color:'azure' }}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{background:'#DC3545'}} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
 
                 {/* <div className="auth">
                    {
                        isAuthenticated ? 
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logOut</button>
                        :
                        <button onClick={() => loginWithRedirect()}></button>
                    }
                </div>  */}

              <Nav.Link href="/"  style={{color:'azure'}}>Home</Nav.Link>
              {isAuthenticated && <Nav.Link href="/favorites" style={{color:'azure'}}>Favorites</Nav.Link>} 
              {isAuthenticated && <Nav.Link href="/signUp" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{color:'azure'}}>Logout</Nav.Link>}
               {/* {!isAuthenticated && <Nav.Link href="/signUp">SignUp</Nav.Link>} */}
              {!isAuthenticated && <Nav.Link href="/login" onClick={() => loginWithRedirect()} style={{color:'azure'}}>Login</Nav.Link>}
              
              {/* {isAuthenticated && (<Nav.Link className="me-auto my-2 my-lg-0" style={{color:'azure'}}>Hello, {user.name}</Nav.Link>)}  */}
                    
            </Nav>
            {isAuthenticated && (<Nav.Link className="me-auto my-2 my-lg-0" style={{color:'azure'}}>Hello, {user.name}</Nav.Link>)} 
            <SearchBox searchValue={query} setSearchValue={setQuery} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>

        <Container className="ContainerComp">
          {query &&
            <Row className="section1">
              <MovieListHeading heading='Search result' />
            </Row>
          }
          <Row className="firstLine">
            <Col>
              <MovieList movies={search} />
            </Col>
          </Row>
        </Container>

      </BrowserRouter>
    </>

  );
}

export default NavScrollExample;