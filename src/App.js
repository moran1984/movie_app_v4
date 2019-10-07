import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.lt/api/v2/list_movies.json");

    this.setState({ isLoading: false, movies: movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    console.log(movies);
    return (
      <div>
        {isLoading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <div>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
