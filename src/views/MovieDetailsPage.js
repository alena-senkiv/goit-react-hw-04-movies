import React, { Component } from 'react';
import tmdbAPI from 'services/tmdbAPI';
import MovieCard from 'components/MovieCard/MovieCard';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { match } = this.props;
    tmdbAPI
      .fetchMovieDetails(match.params.movieId)
      .then(movie => this.setState({ movie }));
  }
  render() {
    const { movie } = this.state;
    return (
      <>
        <h1>Details</h1>
        {movie && <MovieCard movie={movie} />}
      </>
    );
  }
}
