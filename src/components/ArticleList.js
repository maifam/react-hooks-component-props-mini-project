import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

console.log(blogData);


function ArticleList({posts}) {


  const arrOfPosts = posts.map(post =>{
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
  })
  
  return (
    <main>
      {arrOfPosts}
    </main>
  );
}

export default ArticleList;
