import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Login, { login } from "./pages/login";
import { Movie } from "./pages/movie";
// import { SignUp } from "./pages/signUp";
import { Actor } from "./pages/actor";
import { Favorites } from "./pages/favorites";
import { useReducer, useEffect } from "react";
import {
  initialState as favoritesInitialState,
  favoritesReducer
} from "./Favorites/reducer";
import { FavoritesContext } from "./Favorites/context";

export const AppRouter = () => {

  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    favoritesInitialState
  );

  // Add an effect to save the favoritesState in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesState));
  }, [favoritesState]);

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch
  };

  return (
    
    <FavoritesContext.Provider value={favoritesContextValue}>
    <Router>
     
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/movie/:id" element={<Movie />} />
        {/* <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
    </FavoritesContext.Provider>
  );
};