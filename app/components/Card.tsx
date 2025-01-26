// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      width: '200px',
      backgroundColor: '#87CEFA',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0A1A5E' }}>{value}</p>
    </div>
  );
};

export default Card;
