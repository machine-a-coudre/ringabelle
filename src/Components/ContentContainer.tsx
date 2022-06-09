import React from 'react';

const ContentContainer = ({ content }:
  { content: React.ReactNode }) => (
    <div className="content-container">
      {content}
    </div>
);

export default ContentContainer;
