import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  if (process.env.NODE_ENV === 'production') {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  } else {
    root.render(<App />);
  }
}
