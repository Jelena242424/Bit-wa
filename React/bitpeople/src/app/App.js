import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/Header";
//import { fetchUsers } from '../services/fetchUsers';
import { UsersList } from "./users/UsersList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true
    }
  }

   onLayoutChange = (layout) => {
    if (layout === false) {
      this.setState({ listView: true });
    } else {
      this.setState({ listView: false });
    }
  }

  render() {
    
    return (
      <React.Fragment>
        <Header listLayoutActive={this.onLayoutChange} state={this.state.listView}/>
        <UsersList state={this.state.listView}/>
      </React.Fragment>
    );
  }
}

export default App;
