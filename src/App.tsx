import { Routes, Route, useLocation } from 'react-router-dom';
import { NavDrawer } from './components/NavDrawer';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';

function App() {
  const location = useLocation();
  const validRoutes = ['/', '/dashboard'];
  const isNotFoundPage = !validRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden bg-page-bg">
      {!isNotFoundPage && <NavDrawer />}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {!isNotFoundPage && <Navbar />}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-page-bg">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
