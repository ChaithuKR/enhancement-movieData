// App.js

import React, {useState} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import UpcomingMovies from './components/UpcomingMovie'
import SingleMovie from './components/SingleMovie'
import TopRatedMovies from './components/TopRatedMovies'
import SearchedMovie from './components/SearchedMovie'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const handleSearchInputChange = e => {
    setUserInput(e.target.value)
  }
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upcoming" component={UpcomingMovies} />
          <Route path="/top-rated" component={TopRatedMovies} />
          <Route path="/search" component={SearchedMovie} />
          <Route
            path="/search"
            render={() => <SearchedMovie userInput={userInput} />}
          />
          <Route path="/movies/:id" component={SingleMovie} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
