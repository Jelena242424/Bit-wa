import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { Header } from "./partials/Header";
import { fetchUsers } from '../services/fetchUsers';
import { UsersList } from "./users/UsersList"
import { Search } from "./partials/Search"
import { Loader } from "./partials/Loader"
import { Switch, Route } from 'react-router-dom';

import { Home } from "./partials/Home"
import { About } from "./partials/About"


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
    this.setState({
      loading: true
    })
    fetchUsers()
      .then(users => {
        this.setState({
          users: users,
          loading: false
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

  renderMyView() {
    if (this.state.loading) {
      return <Loader />
    }

    return (
      <Home 
      handlerSearchUsers={this.handlerSearchUsers} searchSetState={this.inputValue}
      viewMode={this.state.listView} newUser={this.state.users} inputValue={this.state.inputValue}>
      </Home>
     
    )

  }

  render() {
    return (
      <React.Fragment>
        <Header listLayoutActive={this.onLayoutChange} viewMode={this.state.listView} updateHandler={this.getUsers} />
        <Switch>
          <Route exact path='/' render={()=> this.renderMyView()} />
          <Route exact path='/about' render={()=> <About />} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
