import React, { useState } from 'react';

const RequestCallFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
      {/* The Floating Action Button */}
      <button
        onClick={toggleModal}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>📞</span> Request a Call
      </button>

      {/* Simple Popup Form */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          left: '0',
          width: '280px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          border: '1px solid #eee'
        }}>
          <h4 style={{ margin: '0 0 15px 0' }}>How can we help?</h4>
          <form onSubmit={(e) => { e.preventDefault(); alert('Request sent!'); setIsOpen(false); }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              required 
              style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button 
              type="submit" 
              style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Call Me Back
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RequestCallFAB;