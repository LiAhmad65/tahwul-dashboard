import { Routes, Route, useLocation } from 'react-router-dom';
import { NavDrawer } from './components/common/NavDrawer';
import { Navbar } from './components/common/Navbar';
import { Dashboard } from './pages/Dashboard';
import { StrategicPlanning } from './pages/Dashboard/StrategicPlanning';
import { NotFound } from './pages/NotFound';
import { YearProvider } from './contexts/YearContext';

function App() {
  const location = useLocation();
  const validRoutes = ['/', '/dashboard', '/dashboard/strategic-planning'];
  const isNotFoundPage = !validRoutes.includes(location.pathname);

  return (
    <YearProvider>
      <div className="flex h-screen overflow-hidden bg-page-bg min-w-0">
        {!isNotFoundPage && <NavDrawer />}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {!isNotFoundPage && <Navbar />}
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-page-bg min-w-0">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/strategic-planning" element={<StrategicPlanning />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </YearProvider>
  );
}

export default App;
