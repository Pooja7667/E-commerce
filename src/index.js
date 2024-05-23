import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/buty",
    element: <Buty />,
  },
  {
    path: "/man",
    element: <Man />,
  },
  {
    path: "/kids",
    element: <Kids />,
  },
  {
    path: "/electroic",
    element: <Electronic />,
  },

  {
    path: "/wemon",
    element: <Wemon/>,
  },
]);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


