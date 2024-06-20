import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Home = () => {
    const user = useSelector(store => store.auth.user)

    
    return (
        <>
            {user ? <>
                <Profile />
            </>
                : <>
                    <div className="container mt-5">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-6 mt-5 bg-light p-2">
                                <h1 className='mt-4'>Welcome to Our SaaS Application</h1>
                                <p>This is a full-stack SaaS application for user registration, login, and profile viewing. <br />
                                    Implement React for the front-end, Node.js for the back end, and MySQL for data storage. <br />
                                    Demonstrate deployment on the AWS free tier for a fully functional demo. <br />
                                    Integrate automated testing to ensure code quality.</p>
                                <div className="d-flex flex-column align-items-center">
                                    <Link to="/register" className="btn btn-primary mb-3">Go!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    );
};

export default Home;
