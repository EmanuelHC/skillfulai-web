import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="skillfulai__blog section__padding" id="blog">
    <div className="skillfulai__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="skillfulai__blog-container">
      <div className="skillfulai__blog-container_groupA">
        <Article imgUrl={blog01} date="July 5, 2023" text="Introducing SkillfulAI: The Future of Personalized AI Experiences" />
      </div>
      <div className="skillfulai__blog-container_groupB">
        <Article imgUrl={blog02} date="July 12, 2023" text="The Power of Modular AI: How SkillfulAI is Changing the Game" />
        <Article imgUrl={blog03} date="July 19, 2023" text="Creating Your Own AI with SkillfulAI: A Step-by-Step Guide" />
        <Article imgUrl={blog04} date="July 26, 2023" text="Exploring the SkillfulAI Marketplace: Buy, Sell, and Trade AI Skills" />
        <Article imgUrl={blog05} date="August 2, 2023" text="The Future of AI Ownership: Understanding NFTs in the SkillfulAI Marketplace" />
      </div>
    </div>
  </div>
);

export default Blog;