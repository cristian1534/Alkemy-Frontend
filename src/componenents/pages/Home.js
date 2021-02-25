import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                  <th scope="col">Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>                 
                    <td>{post.title}</td>
                    <td>
                        <Link class="btn btn-primary mr-2" >View</Link>
                        <Link class="btn btn-outline-primary mr-2" >Edit</Link>
                        <Link class="btn btn-danger" >Delete</Link>
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