import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import routes from 'routes';
import Cast from '../Cast';
import Reviews from '../Reviews';

const AdditionalInfo = () => {
  return (
    <>
      <p>Additional Information</p>
      <ul>
        <li>
          <NavLink exact to="" className="" activeClassName="">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink exact to="" className="" activeClassName="">
            Reviews
          </NavLink>
        </li>
      </ul>
      {/* <Switch>
        <Route path={`${this.props.match.path}/cast`} exact component={Cast} />
        <Route
          path={`${this.props.match.path}/reviews`}
          exact
          component={Reviews}
        />
      </Switch> */}
    </>
  );
};

export default AdditionalInfo;
