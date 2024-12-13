import React from 'react'
import "../styles/NewsItem.css"
import {Link} from 'react-router-dom'
import { Code, Key } from '@mui/icons-material'

function NewsItem({title,img, code}) {
  return (
    <div  className="card">
        <img className="card-img" src={img} alt="Card image"/>
        <div className="card-content">
          <Link to={`/news/${code}`}> 
            <h2 className="card-title">{title}</h2>
          </Link>
      
        </div>
    </div>
  )
}

export default NewsItem
