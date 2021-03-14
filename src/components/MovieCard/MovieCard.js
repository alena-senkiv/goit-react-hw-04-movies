import React from 'react';
import tmdbAPI from 'services/tmdbAPI';
import AdditionalInfo from './AdditionalInfo';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  const userScore = vote_average * 10;
  const releaseYear = release_date.slice(0, 4);
  return (
    <>
      <img src={`${tmdbAPI.BASE_IMG_URL}/${poster_path}`} alt={title} />
      <h2>
        {title} ({releaseYear})
      </h2>
      <p>User Score: {userScore}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <AdditionalInfo />
    </>
  );
};

export default MovieCard;
