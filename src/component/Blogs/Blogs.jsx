import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-[#f3e8ff]'>
            <h1 className="text-3xl text-center font-bold pt-5">Question Answer </h1>
            <div className='p-10'>
                <h2 className='mt-2 font-semibold mb-3  '>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='p-3'>
                    A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                    <br />
                    A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.
                    <br />
                    In the client side we store them in local storage.
                </p>
                <h2 className='mt-4 font-semibold mb-3  '>2. Compare SQL and NoSQL databases?</h2>
                <p className='p-3'>
                    SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                    These databases have fixed or static or predefined schema.
                    These databases are not suited for hierarchical data storage.
                    These databases are best suited for complex queries
                    <br />
                    NoSQL is Non-relational or distributed database system.
                    They have a dynamic schema.
                    These databases are best suited for hierarchical data storage.
                    These databases are not so good for complex queries

                </p>
                <h2 className='mt-4 font-semibold mb-3  '>3. What is express js? What is Nest JS?</h2>
                <p className='p-3'>
                    Express is a minimalist and flexible framework that is easy to use and has a large community of developers. This is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
                    <br />
                    NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI. NestJS is a progressive Node. js framework that helps build server-side applications.

                </p>
                <h2 className='mt-4 font-semibold mb-3  '>3.What is MongoDB aggregate and how does it work?</h2>
                <p className='p-3'>
                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    <br />
                    
                </p>
            </div>
        </div>
    );
};

export default Blogs;