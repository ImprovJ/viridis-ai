import React from 'react';
import { useParams } from 'react-router-dom';
import sectionObjects from '../utilities/sectionObjects';

const SectionPage = () => {
  const { sectionId } = useParams();
  const section = sectionObjects.find(s => s.id === sectionId);

  if (!section) return <div>Section not found</div>;

  return (
    <div>
      <h1>{section.title}</h1>
      {section.blogs.map(blog => {
        const BlogContent = blog.content;
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <BlogContent />
          </div>
        );
      })}
    </div>
  );
};

export default SectionPage;