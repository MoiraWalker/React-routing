import React from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import close from "../../../assets/001-close.svg"

export const BlogContent = ({ title, content, date }) => (
    <div className="blog-content-container">
        <div className="blog-content-card">
            <header className="blog-content-header">
                <h3 className="blog-content-title">{title}</h3>
                <NavLink to="/blog" activeClassName="active-link-go-back" className="link-go-back" >
                    <img className="close" src={close} alt="close" width="20px"/>
                </NavLink>
            </header>
            <time className="blog-content-time" dateTime={date}>Date written: {date}</time>
            <p className="blog-content">{content}</p>
        </div>
    </div>
)