import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { fetchUsers } from '../services/fetchUsers';
import { UsersList } from "./users/UsersList"
import { Search } from "./partials/Search"

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
    this.getUsers()
  }

  getUsers = () => {
    fetchUsers()
      .then(users => {
        this.setState({
          users: users
        })
      }).catch(error => {
        console.log(error);
      })

    if (localStorage.getItem("listView") !== null) {
      this.setState({ listView: (localStorage.getItem("listView") == "true") });
    }
  }

  handlerSearchUsers = (event) => {
    this.setState({
      inputValue: event.target.value
    });
    
    //   const filteredUsers = this.state.users.filter((user) => { user.name.includes(this.state.inputValue) });
    //   this.setState.filteredUsers = filteredUsers;
    //  //console.log(filteredUsers)

  }


  render() {
    return (
      <React.Fragment>
        <Header listLayoutActive={this.onLayoutChange} viewMode={this.state.listView} updateHandler={this.getUsers} />
        <Search handlerSearchUsers={this.handlerSearchUsers} searchSetState={this.inputValue} />
        <UsersList viewMode={this.state.listView} newUser={this.state.users} inputValue={this.state.inputValue}/>
      </React.Fragment>
    );
  }
}

export default App;
