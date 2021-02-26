import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const NewPost = () => {

    /*
    This ID is taking from params so we can identificate the post
    to edit when we click on Editing Button at Home Page...
    */
    const  { id } = useParams();
    const [ newPost, setNewPost ] = useState({ 

        id: Math.floor(Math.random() * 100000000),
        userId: "",
        title: "",
        body: ""

    })

    const { userId, title, body } = newPost;
    /*
    Here we take the new data and set up the state with it
    as an object...
    */
    const postChange = e => {
        setNewPost({ ...NewPost,
            [e.target.userId]: e.target.value,
            [e.target.title]: e.target.value,
            [e.target.body]: e.target.value });
      };
      
    /*
    Here we submit the updated post, but as this API is external
    I just put the code...
    */

    const onSubmit = async (e)=> {
        e.preventDefault();
        await axios.post("http://jsonplaceholder.typicode.com/posts", newPost)
       
    }

    const loadPost = async () => {
        const result = await axios.get("http://jsonplaceholder.typicode.com/posts/" + id)
        setNewPost(result.data)
    }
    
    useEffect(() => {
        loadPost();
    }, [])
    
    return(
        <div class="container">
            <h1>Update your Post</h1>
           <form class="mb3-3 needs-validation" novalidate onSubmit={ e => onSubmit()}>
                <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">UserId</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="validationCustom01" 
                                placeholder="UserId here..." 
                                required 
                                value={ userId}
                                onChange= { e => postChange(e)}/>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                </div><br/>
               
                <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Title</label>
                        <input 
                         type="text" 
                         class="form-control" 
                         id="validationCustom01" 
                         placeholder="Title here..." 
                         required 
                         value={ title }
                         onChange= { e => postChange(e)}/>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                </div><br/>
                <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Post</label>
                        <textarea 
                        type="text" 
                        class="form-control" 
                        id="validationCustom01" 
                        placeholder="Post here..." 
                        required 
                        value={ body }
                        onChange= { e => postChange(e)}/>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                </div><br/>
                <div class="col-12">
                    <button class="btn btn-primary"  type="submit" >Update Post</button>
                </div>
           </form>
        </div>

    )
};

export default NewPost;