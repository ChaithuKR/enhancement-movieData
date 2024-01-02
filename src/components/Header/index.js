import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const Header = ({onSearchInputChange}) => (
  <div className="header">
    <h1>movieDB</h1>
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/upcoming">Upcoming Movies</Link>
      </li>
      <li>
        <Link to="/top-rated">Top Rated Movies</Link>
      </li>
      <li>
        <input
          type="text"
          onChange={onSearchInputChange}
          placeholder="Search..."
        />
      </li>
      <li>
        <button>
          <Link to="/search">Search </Link>
        </button>
      </li>
    </ul>
  </div>
)

export default Header
