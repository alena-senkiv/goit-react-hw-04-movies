import React, { Component } from 'react';
import tmdbAPI from 'services/tmdbAPI';
import MoviesList from 'components/MoviesList/MoviesList';

export default class HomePage extends Component {
  state = {
    trending: [],
  };
  componentDidMount() {
    tmdbAPI
      .fetchTrending()
      .then(({ results }) => this.setState({ trending: results }));
  }

  render() {
    const { trending } = this.state;
    return (
      <>
        <h1>Trending movies as of today</h1>
        {trending.length > 0 && <MoviesList movies={trending} />}
      </>
    );
  }
}
