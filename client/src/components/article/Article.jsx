import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, url }) => {
  
  const handleArticleClick = () => {
    window.location.href = url;
  }

  return (
    <div className="skillfulai__blog-container_article" onClick={handleArticleClick}>
      <div className="skillfulai__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="skillfulai__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
