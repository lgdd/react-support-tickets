import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ELEMENT_ID = 'react-support-tickets';

class WebComponent extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
