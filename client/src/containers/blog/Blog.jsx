import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="skillfulai__blog section__padding" id="blog">
    <div className="skillfulai__blog-heading">
      <h1 className="gradient__text-blog">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="skillfulai__blog-container">
      <div className="skillfulai__blog-container_groupA">
        <Article imgUrl={blog01} date="July 5, 2023" text="Driving Industry Evolution: Skillful AI's Cutting-Edge AI Solutions" url="https://www.linkedin.com/pulse/driving-industry-evolution-skillful-ais-cutting-edge-ai%3FtrackingId=swRQFX3XK15pqlMjjqruxA%253D%253D/?trackingId=swRQFX3XK15pqlMjjqruxA%3D%3D"/>
      </div>
      <div className="skillfulai__blog-container_groupB">
        <Article imgUrl={blog02} date="July 12, 2023" text="The Power of Modular AI: How SkillfulAI is Changing the Game" />
        <Article imgUrl={blog03} date="July 19, 2023" text="Creating Your Own AI with SkillfulAI: A Step-by-Step Guide" />
   
      </div>
    </div>
  </div>
);

export default Blog;