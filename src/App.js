import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ThemeProvider, useTheme } from './context/themeContext';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`}>
      <Routes>
        {publicRoutes.map((route, id) => {
          const Page = route.component;
          const Layout = route.layout || React.Fragment;

          return (
            <Route
              key={id}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
        <ToastContainer position='top-center' />
      </ThemeProvider>
    </Router>
  );
}

export default App;
