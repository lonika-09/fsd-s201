import React from 'react';

function App() {
  const styles = {
    body: {
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      paddingTop: '100px',
      fontFamily: 'Arial, sans-serif',
      height: '100vh',
      margin: 0
    },
    name: {
      fontSize: '60px',
      fontWeight: 'bold',
      color: '#ff00ff',
      animation: 'scaleFade 2s infinite alternate'
    },
    '@keyframes scaleFade': {
      '0%': {
        transform: 'scale(1)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(1.2)',
        opacity: 0.6
      }
    }
  };

  return (
    <div style={styles.body}>
      <style>
        {`
          @keyframes scaleFade {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.2);
              opacity: 0.6;
            }
          }
        `}
      </style>
      <div style={styles.name}>Lonika</div>
    </div>
  );
}

export default App;
