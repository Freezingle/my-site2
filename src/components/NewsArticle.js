import React from 'react'
import { useParams } from 'react-router-dom';
import { newsList } from '../helpers/newsList';
import "../styles/newsArticle.css"
function NewsArticle() {

  const { code } = useParams();  // Extract 'code' from the URL
  const newsItem = newsList.find((item) => item.code == code);
  console.log(); 


  if (!newsItem) {
    return <h1>News not found</h1>; // Show a message if the news item isn't found
  }

    return (
      <div className= "news-item">
        <h1>{newsItem.title}</h1>
        <img src={newsItem.thumbnail} alt={newsItem.title} />
        <p>{newsItem.content}</p>
      </div>
    );
  }
  

export default NewsArticle