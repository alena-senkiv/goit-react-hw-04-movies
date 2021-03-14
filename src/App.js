import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import Layout from 'components/Layout';
import HomePage from 'views/HomePage';
import MoviesPage from 'views/MoviesPage';
import MovieDetailsPage from 'views/MovieDetailsPage';
// import s from './App.module.css';

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Redirect to={routes.home} />
    </Switch>
  </Layout>
);

export default App;
