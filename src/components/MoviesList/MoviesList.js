import React from 'react';
import MoviesListItem from './MoviesListItem';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MoviesListItem key={id} title={title} id={id} />
      ))}
    </ul>
  );
}
