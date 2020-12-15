import React from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import close from "../../../assets/001-close.svg";

export const BlogContent = ({ title, content, date }) => {
    return (
        <div className="blog-content-container">
            <div className="blog-content-card">
                <header className="blog-content-header">
                    <h3 className="blog-content-title">{title}</h3>
                    <NavLink to="/" activeClassName="active-link-go-back" className="link-go-back" >
                        <img className="close" src={close} alt="close" width="15px"/>
                    </NavLink>
                </header>
                <p className="blog-content">{content}</p>
                <time className="blog-content-date" dateTime={date}>Date written: {date}</time>
            </div>
        </div>
    )
}