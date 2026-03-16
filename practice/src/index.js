import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
//import App from './App';
import reportWebVitals from './reportWebVitals';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
<div style={{ display: "flex" }}>
  {num.map(
    (n) =>
      n>=2 &&
      n!==5 && (
      <div
        style={{
          padding:10,
          color:n % 2 ? 'blue' : 'black'
        }}
      >
        {num.map((m) => (
          <div>
            {n} x {m} = {n * m}
          </div>
        ))} 
      </div>
    )
  )}
</div>
);


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
