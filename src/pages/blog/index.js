import React from 'react';
import posts from '../../data/posts.json';
import { useAuthentication } from '../../hooks/authentication';
import { BlogListItem } from "../../components/molecules/BlogListItem";
import { BlogPost} from "../blogPost";
import './index.css';


export const Blog = () => {
    const { isAuthenticated } = useAuthentication();
    return (
        <div className="blog-page">
            <div className="page-container">
                <h1>Blogposts - {posts.length}</h1>
                <ul className="blog-list">
                    {posts.map((post) => (
                        <>
                            {(!post.private || isAuthenticated) && <BlogListItem
                            link={`/blog/${post.id}`}
                            date={post.date.split(' ')[0]}
                            title={post.title}
                            />}

                            {/*{(!post.private || isAuthenticated) && <BlogListItem*/}
                            {/*    link={`/blog/${post.id}`}*/}
                            {/*    date={post.date.split(' ')[0]}*/}
                            {/*    title={post.title}*/}
                            {/*/>}*/}
                        </>
                    ))}
                    <div className="see-all">
                        <p className='see-all-p'>To see all blogposts please log in</p>
                    </div>
                </ul>
            </div>
        </div>
    );
};
