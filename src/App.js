import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import Posts from './Components/Posts';
import PostForm from './Components/PostForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
