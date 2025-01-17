// components/HeaderSection/HeaderSection.js
import React from 'react';

type Props = {
    title: string;
    
}

function HeaderSection({ title }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="title">{title}</h2>
     
    </div>
  );
}

export default HeaderSection;
