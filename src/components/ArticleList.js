import React from "react";
import Article from "../components/Article";

function ArticleList({ post }){
    //console.log(post)

    const eachPostInfo = post.map(eachPost => { 
      return ( <Article key={eachPost.id} title={eachPost.title} date={eachPost.date} preview={eachPost.preview} minutes={eachPost.minutes}/>
      )
    }) 
    
    return (
      <main>
        {eachPostInfo}
      </main>
    )
  }
  


export default ArticleList;