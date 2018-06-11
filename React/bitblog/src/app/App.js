import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer"
import { postService } from "../services/postService"
import { authorsService } from "../services/authorsService"
import { Posts } from "./pages/Posts"
import { Authors } from "./pages/Authors"
import {About} from "./pages/About"
import { PostDetails } from './pages/PostDetails';
import { AuthorDetails } from './pages/AuthorDetails';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    postService.fetchPosts();
    authorsService.fetchAuthors();
    return (
      <React.Fragment>
        <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route exact path='/Authors' component={Authors} />
          <Route exact path='/About' component={About} />
          <Route exact path='/post/:id' component={PostDetails} />
          <Route exact path='/AuthorDetails/:userId' component={AuthorDetails} />
        </Switch>
        </main>
        <Footer />
      </React.Fragment>
        );
      }
    }
    
    export default App;
