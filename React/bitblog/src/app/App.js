import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer"
import { postService } from "../services/postService"
import { authorsService } from "../services/authorsService"
import { Posts } from "./pages/Posts"
import { Authors } from "./pages/Authors"
import { About } from "./pages/About"
import { PostDetails } from './pages/PostDetails';
import { AuthorDetails } from './pages/AuthorDetails';
import { NewPost } from "./pages/NewPost";
import { CreateNewPost } from './components/CreateNewPost';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <Header />
          <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/post/new' component={CreateNewPost} />
            <Route exact path='/post/:id' component={PostDetails} />
            <Route exact path='/authors' component={Authors} />
            <Route exact path='/author/:userId' component={AuthorDetails} />
            <Route exact path='/about' component={About} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
