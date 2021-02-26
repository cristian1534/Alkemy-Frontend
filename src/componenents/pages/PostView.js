import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {

  const [post, setPost] = useState({
    tiitle: "",
    body: "",
  });
  const { id } = useParams();
  
  useEffect(() => {
    loadPost();
  }, []);

  /*
  Here this method is taking the data by post and id, 
  then set up the state to show the post selected...
  */
  const loadPost = async () => {
    const result = await axios.get("http://jsonplaceholder.typicode.com/posts/" + id)
    setPost(result.data)
    //console.log(post)
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {post.id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {post.title}</li>
        <li className="list-group-item">Body: {post.body}</li>
        
      </ul>
    </div>
  );
};

export default Post;