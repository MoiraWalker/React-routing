import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


export const BlogListItem = ({ date, title, link }) => {
    return (
      <li className='blog-list-item'>
          <Link className="blog-list-link" to={link}>
              <h4 className='blog-list-item-title'>{title}</h4>
              <p className='blog-list-item-date'>{date}</p>
          </Link>
      </li>
  );
};