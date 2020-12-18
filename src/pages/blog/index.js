import React from 'react';
import posts from '../../data/posts.json';
import { BlogListItem } from "../../components/molecules/BlogListItem";
import './index.css';
import {AuthContext} from "../../context/authContext";
import { useContext } from 'react';
import {NavLink} from "react-router-dom";

export const Blog = () => {
    const context = useContext(AuthContext);
    const { toggle } = context;

    return (
        <div className="blog-page">
            <div className="page-container">
                <h1>Blogposts</h1>
                <ul className="blog-list">
                    {posts.map((post) => (
                        <>

                            { toggle ?
                                (!post.private) &&
                                    <BlogListItem
                                        link={`/blog/${post.id}`}
                                        date={post.date.split(' ')[0]}
                                        title={post.title}
                                    />
                                :
                                (post.private) && <BlogListItem
                                    link={`/blog/${post.id}`}
                                    date={post.date.split(' ')[0]}
                                    title={post.title}
                                />
                            }
                        </>
                    ))}
                    { toggle ?
                        <div className="see-all">
                            <p className='see-all-p'>To see all blogposts please
                                </p>
                            <NavLink to="/login" className="see-all-link" >Log in</NavLink>
                        </div> : <></>
                    }
                </ul>
            </div>
        </div>
    );
};
