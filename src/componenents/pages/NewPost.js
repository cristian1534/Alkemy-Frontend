import React, { useState } from 'react';
import axios from 'axios';


const NewPost = () => {
    
    // Setting state of the post as a empty object...
    const [ newPost, setNewPost ] = useState({ 

        id: Math.floor(Math.random() * 100000000),
        userId: "",
        title: "",
        body: ""

    })
    // Descontracting...
    const { userId, title, body } = newPost;

    // Updating the state...
    const postChange = e => {
        setNewPost({ ...NewPost, 
            [e.target.userId]: e.target.value,
            [e.target.title]: e.target.value,
            [e.target.body]: e.target.value });
      };

    
      /*
      Here the Submit is working but does not update due to this API 
      is external API...
      */
    const onSubmit = async (e)=> {
        e.preventDefault();
        await axios.post("http://jsonplaceholder.typicode.com/posts", newPost)
    }
    
    return(
        <div class="container">
             <h1>Create a new Post</h1>
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
                    <button class="btn btn-primary"  type="submit" >Create Post</button>
                </div>
           </form>
        </div>

    )
};

export default NewPost;