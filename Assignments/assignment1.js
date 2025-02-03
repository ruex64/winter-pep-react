const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];
  
  const sortMoviesByRating = (movies) => {
    return movies.sort((a, b) => b.rating - a.rating);
  };
  
  const findMovieByTitle = (title) => {
    const movie = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());
    return movie ? movie : 'Movie not found';
  };
  
  const getMoviesAboveRating8 = () => {
    return movies.filter((movie) => movie.rating > 8);
  };
  
  const listMovieTitles = () => {
    return movies.map((movie) => movie.title);
  };
  
  const countMoviesByGenre = (genre) => {
    return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase()).length;
  };
  
  const areAllMoviesRatedAbove7 = () => {
    return movies.every((movie) => movie.rating > 7);
  };
  
  const getMoviesReleasedAfter2000 = () => {
    return movies.filter((movie) => movie.releaseYear > 2000);
  };
  
  
  console.log(sortMoviesByRating(movies));
  console.log(findMovieByTitle('Inception'));
  console.log(getMoviesAboveRating8());
  console.log(listMovieTitles());
  console.log(countMoviesByGenre('Sci-Fi'));
  console.log(areAllMoviesRatedAbove7());
  console.log(getMoviesReleasedAfter2000());
  