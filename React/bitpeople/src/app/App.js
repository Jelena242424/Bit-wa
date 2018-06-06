import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/header";
import { fetchUsers } from '../services/fetchUsers';
import { UsersList } from "./users/UsersList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      users: [],
    }
  }

  onLayoutChange = (layout) => {
    if (layout === false) {
      this.setState({ listView: true });
    } else {
      this.setState({ listView: false });
    }
    localStorage.setItem("listView", !layout)
  }


  componentDidMount = () => {
     fetchUsers()
      .then(users => {
        this.setState({
          users: users
        })
      }).catch(error => {
        console.log(error);
      })
      
      if(localStorage.getItem("listView") !== null) {
        this.setState({listView: (localStorage.getItem("listView") == "true")});
      }
  }

  getUsers = () => {
    this.componentDidMount();
  }

  render() {
    return (
      <React.Fragment>
        <Header listLayoutActive={this.onLayoutChange} viewMode={this.state.listView} updateHandler={this.getUsers}/>
        <UsersList viewMode={this.state.listView} newUser={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App;
