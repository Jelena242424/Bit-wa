import React from 'react';
import './App.css';
import Header from "./partials/Header";
import Footer from './partials/Footer';
import PostList from './posts/PostList';
import posts from '../data/data'

const App = (props) => {
  return (
      <React.Fragment>
          <Header myTitle={'BIT Posts'} />
          <PostList myPosts={posts} />
          <Footer />
      </React.Fragment>
  )
}

export default App;
