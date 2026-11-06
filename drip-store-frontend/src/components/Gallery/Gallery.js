import React, { useState } from 'react';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={className}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius
      }}
    >
      {/* Botão Esquerdo */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          opacity: currentIndex === 0 ? 0.5 : 1
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      {/* Imagem Principal */}
      <div 
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex + 1}`}
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius
          }}
        />
      </div>

      {/* Botão Direito */}
      <button
        onClick={nextSlide}
        disabled={currentIndex === images.length - 1}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer',
          opacity: currentIndex === images.length - 1 ? 0.5 : 1
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

      {/* Thumbnails */}
      {showThumbs && (
        <div className="d-flex gap-2 justify-content-center mt-3" style={{ flexWrap: 'wrap' }}>
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '117px',
                height: '95px',
                borderRadius: radius,
                overflow: 'hidden',
                cursor: 'pointer',
                border: index === currentIndex ? '2px solid #C92071' : '2px solid transparent'
              }}
            >
              <img 
                src={image.src} 
                alt={`Thumbnail ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
