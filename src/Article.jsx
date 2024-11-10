import React from 'react';
function Article({ title, date, image, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <time datetime={date}>{date}</time>
      <br />
      <img src={"/blog-image-1.jpg"} alt={title} />
      <p>{text}</p>
      <a>Continues...</a>
    </article>
  );
}

export default Article;