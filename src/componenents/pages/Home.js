import React, { useState, useEffect } from 'react';
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

    return (
        <div className="container">
          <div className="py-4">
            <h1>Home Page</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order of Post</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

export default Home;