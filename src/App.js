import React from 'react';
import GithubLogo from './github-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5">GitHub Profile</h1>
      <form>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" required />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img 
          src={GithubLogo}
          alt="logo do github"
          className="responsive rounded-circle"
          height="200p">
        </img>
        <h1 className="pt-5">
          <a href="https://github.com/georgematos" target="_new">George Matos</a>
        </h1>
        <h3>Maracanaú</h3>
        <p>
          <a href="http://algumacoisa.com" target="_new" className="text-info">
            http://algumacoisa.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
