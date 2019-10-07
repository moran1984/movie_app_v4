import React from "react";

function Movie({ title, summary, genres, poster }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Movie;
