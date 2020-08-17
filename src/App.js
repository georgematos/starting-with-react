import React, { useState } from 'react';
import GithubLogo from './github-logo.jpg';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(resp => resp.json())
      .then(userResp => setUserData(userResp));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="container text-center">
      <h1 className="py-5">GitHub Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={handleChange} />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={GithubLogo}
            alt="logo do github"
            className="responsive rounded-circle"
            height="200p">
          </img>
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              alt="logo do github"
              className="responsive rounded-circle"
              height="200p">
            </img>
            <h1 className="pt-5">
              <a href={userData.html_url} target="_new">{userData.name}</a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="_new" className="text-info">
              {userData.blog}
              </a>
            </p>
            <span>{userData.bio}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
