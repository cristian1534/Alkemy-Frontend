import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Pages.css';
import axios from 'axios';

const Home = () => {

    const [posts, setPosts ] = useState([])
    
    useEffect(() => {
        loadPosts();
    },[])

    const loadPosts = async () => {
        const resault = await axios.get("http://jsonplaceholder.typicode.com/posts")
        setPosts(resault.data)
    }
    const deletePost = async id => {
      await axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`);
      alert("The Post was deleted.")
    };

    return (
        <div className="container">
          <div className="py-4">
            <h1>Post List:</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order of Post:</th>
                  <th scope="col">UserId:</th>
                  <th scope="col">Title:</th>
                  <th scope="col">Select operation:</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th> 
                    <td>{post.userId}</td>               
                    <td>{post.title}</td>
                    <td>
                        <Link class="btn btn-success mr-2" to={ `postview/${post.id}`}>View</Link>
                        <Link class="btn btn-warning mr-2" to={ `edit/${post.id}`}>Edit</Link>
                        <Link class="btn btn-danger" onClick= {() => deletePost(post.id)} >Delete</Link>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

export default Home;