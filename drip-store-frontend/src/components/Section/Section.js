import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {title && (
          <h2 
            className="text-dark-gray" 
            style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: '#474747',
              textAlign: titleAlign
            }}
          >
            {title}
          </h2>
        )}
        {link && (
          <a 
            href={link.href} 
            className="text-decoration-none"
            style={{ 
              fontSize: '18px', 
              color: '#C92071',
              fontWeight: '500'
            }}
          >
            {link.text}
          </a>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
