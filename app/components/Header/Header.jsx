import React from 'react';
import {Navigation} from '../Navigation/Navigation.jsx';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Example of React with es6 and browserify</h1>
        <Navigation />
      </header>
    );
  }
}
