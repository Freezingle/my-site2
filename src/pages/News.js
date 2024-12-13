import React from 'react'
import {newsList} from "../helpers/newsList"
import NewsItem from "../components/NewsItem"

function News() {
  return (
    <div className='news' style={{ backgroundColor: '#36454F	', color: 'white' }}>
        <div className="newsList">
            {
            newsList.map((newsItem,key)=>{
                return(
                <NewsItem img={newsItem.thumbnail} title={newsItem.title} code= {newsItem.code} />
                )
            })
            }
        </div>
      

    </div>
  )
}

export default News;
