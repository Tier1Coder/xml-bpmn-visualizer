import React from 'react';

const HelpIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-2 -2 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g 
        id="Layer_1" 
        transform="translate(-2, -2)" 
        style={{ enableBackground: "new 0 0 32 32" }}
      >
        <g id="Question">
          <path 
            d="M16, 2C8.3, 2 2, 8.3 2, 16C2, 23.7 8.3, 30 16, 30C23.7, 30 30, 23.7 30, 16C30, 8.3 23.7, 2 16, 2zM16, 24C14.9, 24 14, 23.1 14, 22C14, 20.9 14.9, 20 16, 20C17.1, 20 18, 20.9 18, 22C18, 23.1 17.1, 24 16, 24zM20.7, 13.3C20.5, 13.7 20.3, 14 20.1, 14.3C19.8, 14.6 19.6, 14.8 19.3, 15C19, 15.2 18.7, 15.4 18.4, 15.6C18.1, 15.8 17.9, 16 17.7, 16.3C17.5, 16.6 17.4, 16.9 17.3, 17.3L17.3, 18L14.6, 18L14.6, 17.1C14.6, 16.5 14.8, 16.1 14.9, 15.7C15.1, 15.3 15.3, 15 15.5, 14.7C15.7, 14.4 16, 14.2 16.3, 14C16.6, 13.8 16.8, 13.6 17.1, 13.4C17.3, 13.2 17.5, 13 17.7, 12.8C17.8, 12.6 17.9, 12.3 17.9, 11.9C17.9, 11.3 17.7, 10.9 17.4, 10.6C17.1, 10.3 16.7, 10.2 16.1, 10.2C15.7, 10.2 15.4, 10.3 15.2, 10.4C14.9, 10.5 14.7, 10.7 14.5, 10.9C14.3, 11.1 14.2, 11.4 14.1, 11.7C14, 12.1 14, 12.7 14, 13L11, 13C11, 12.3 11.1, 11.4 11.4, 10.9C11.6, 10.3 12, 9.8 12.4, 9.4C12.8, 9 13.3, 8.6 13.9, 8.4C14.5, 8.2 15.2, 8 15.9, 8C16.9, 8 17.7, 8.1 18.3, 8.4C18.9, 8.7 19.5, 9 19.9, 9.3C20.3, 9.7 20.6, 10.1 20.7, 10.5C20.8, 10.9 21, 11.3 21, 11.7C21, 12.4 20.9, 12.9 20.7, 13.3z" 
            fill="#146af5" 
            className="Blue" 
          />
        </g>
      </g>
    </svg>
  );
};

const HelpIconButton = ({ width, height, onClick, label, className }) => {
    return (
      <button 
        onClick={onClick} 
        className={className} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '10px', 
          border: 'none', 
          background: 'none', 
          cursor: 'pointer' 
        }}
      >
        <HelpIcon width={width} height={height} />
        {label && <span style={{ marginLeft: '8px' }}>{label}</span>}
      </button>
    );
};

export { HelpIconButton };
