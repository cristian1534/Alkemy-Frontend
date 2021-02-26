import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const NewPost = () => {
    const  { id } = useParams();
    const [ newPost, setNewPost ] = useState({ 

        id: Math.floor(Math.random() * 100000000),
        userId: "",
        title: "",
        body: ""

    })
    /*
    This form works item like EditPost.js, but does not
    update the data due to external API...
    */
    const { userId, title, body } = newPost;

    const postChange = e => {
        setNewPost({ ...NewPost,
            [e.target.userId]: e.target.value,
            [e.target.title]: e.target.value,
            [e.target.body]: e.target.value });
      };
      
        

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
    
    // This form as the EditPost.js and NewPost.js, all working with validations forms required.
    return(
        <div class="container">
            <h1>Editing page</h1>
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