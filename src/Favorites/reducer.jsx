
const savedFavorites = localStorage.getItem("favorites");
export const initialState = savedFavorites
  ? JSON.parse(savedFavorites)
  : { movies: [] };

  export function favoritesReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_FAVORITES": {

        const foundMovie = state.movies.find((movie) => {
          return movie.id === action.payload.id;
        });

        if (foundMovie) {
            console.log(foundMovie)
          return state;
          
        } else {
          return {
            movies: [...state.movies, action.payload]
          };
        }
      }
      case "REMOVE_FROM_FAVORITES": {
        
        const filteredMovies = state.movies.filter((movie) => {
          return movie.id !== action.payload;
        });
        return {
          movies: filteredMovies
        };
      }
      default: {
        return state;
      }
    }
  }