import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, article2 , article2b} from './imports';
import './blog.css';

const Blog = () => (
  <div className="skillfulai__blog section__padding" id="blog">
    <div className="skillfulai__blog-heading">
      <h1 className="gradient__text-blog">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="skillfulai__blog-container">
      <div className="skillfulai__blog-container_groupA">
        <Article imgUrl={article2} date="August 21, 2023" text="Driving Industry Evolution: Skillful AI's Cutting-Edge AI Solutions" url="https://www.linkedin.com/pulse/driving-industry-evolution-skillful-ais-cutting-edge-ai%3FtrackingId=swRQFX3XK15pqlMjjqruxA%253D%253D/?trackingId=swRQFX3XK15pqlMjjqruxA%3D%3D"/>
      </div>
      <div className="skillfulai__blog-container_groupB">
        <Article imgUrl={article2b} date="August 29, 2023" text="Redefining AI Interactions: How Skillful AI's Dynamic Memory System Personalizes Conversations."url="https://www.linkedin.com/posts/skillful-ai-io_skillfulai-ai-innovativeai-activity-7102134397549629440-cxaI/?utm_source=share&utm_medium=member_ios"/>
       
      </div>
    </div>
  </div>
);

export default Blog;