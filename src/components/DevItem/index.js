import React from "react";

import './styles.css';

function DevItem({dev}) {
  return (
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      {/* <aside>
        <img src="https://www.freeiconspng.com/uploads/logo-twitter-transparent-background-10.png" alt={dev.name} />
        <img src="https://www.freeiconspng.com/uploads/logo-twitter-transparent-background-10.png" alt={dev.name} />
        <img src="https://www.freeiconspng.com/uploads/logo-twitter-transparent-background-10.png" alt={dev.name} />
      </aside> */}
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}

export default DevItem;