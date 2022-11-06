import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root'
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/home/screens/Home';
import Error from './pages/error/Error';

const theme = createTheme({
  palette: {
    primary: {
      main: '#936464'
    },
    secondary: {
      main: '#474747'
    },
    text: {
      main: "#FFFFFF"
    },
    background: {
      main: "#F5F5F5"
    },
    button: {
      main: "#649393"
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: < Root />,
    children: [
      {
        path: '/',
        errorElement: <Error /> ,
        element: <Home />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
