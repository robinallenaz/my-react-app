import React from 'react';

function Article({ title, date, image, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <time datetime={date}>{date}</time>
      <br />
      <img src={image} alt={title} />
      <p>{text}</p>
      <a>Continues...</a>
    </article>
  );
}

export default Article;