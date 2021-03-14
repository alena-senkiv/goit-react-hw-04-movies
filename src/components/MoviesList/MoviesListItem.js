import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

export default function MoviesListIten({ id, title }) {
  return (
    <li>
      <Link
        to={{
          pathname: `${routes.movies}/${id}`,
          // state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
}
