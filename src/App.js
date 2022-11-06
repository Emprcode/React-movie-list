import "./App.css";
import { Container } from "react-bootstrap";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movieObj) => {
    const newArg = movies.filter((item) => item.imdbID !== movieObj.imdbID);
    setMovies([...newArg, movieObj]);
  };

  console.log(movies);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie")) {
      setMovies(movies.filter((item) => item.imdbID !== id));
    }
    console.log(id);
  };

  return (
    <div className="wrapper">
      <Container>
        {/* title */}
        <Title />

        {/* form  */}
        <SearchForm addMovie={addMovie} />
        <MovieList movies={movies} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
