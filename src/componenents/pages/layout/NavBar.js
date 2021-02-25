import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">API POSTS</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/edit">Edit</Link>
                                </li>                   
                            </ul>
                        </div>
                    </div>
            </div>
        </nav>
     </div>
    )
};

export default NavBar;