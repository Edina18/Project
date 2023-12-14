export function addToFavorites(movie) {
    return {
      type: "ADD_TO_FAVORITES",
      payload: movie
    };
  }

  export function removeFromFavorites(movieId) {
    return {
      type: "REMOVE_FROM_FAVORITES",
      payload: movieId
    };
  }