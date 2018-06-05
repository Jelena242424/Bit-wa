import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { fetchUsers } from '../services/fetchUsers';
import { UsersList } from "./users/UsersList"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <UsersList  />
      </React.Fragment>
    );
  }
}

export default App;
