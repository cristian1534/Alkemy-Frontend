import React, { useState } from 'react';


const NewPost = () => {

    const [ post, setPost ] = useState({
        userId: "",
        id: "",
        title: "",
        body: ""

    })
    
    return(
        <div class="container">
           <form class="mb3-3 needs-validation" novalidate >
                <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Title</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="Title here..." required />
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                </div><br/>
                <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Post</label>
                        <textarea type="text" class="form-control" id="validationCustom01" placeholder="Post here..." required />
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                </div><br/>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
           </form>
        </div>

    )
};

export default NewPost;