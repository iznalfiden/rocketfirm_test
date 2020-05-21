import React from 'react';
import { Route, Switch } from "react-router";
import Home from './components/Home';
import PhotoPage from './components/PhotoPage'
import SearchedPhotosList from './components/SearchedPhotosList'
import FavoritesList from './components/FavoritesList'
import SearchHistory from './components/SearchHistory'




function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/searched" component={SearchedPhotosList} />
      <Route path="/favorites" component={FavoritesList} />
      <Route path="/history" component={SearchHistory} />
      <Route path="/:id" component={PhotoPage} />
    </Switch>
  );
}

export default App;