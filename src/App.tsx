import { Routes, Route } from 'react-router-dom';
import { NavDrawer } from './components/NavDrawer';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-page-bg">
      <NavDrawer />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-page-bg">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
