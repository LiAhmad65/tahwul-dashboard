import { Routes, Route } from 'react-router-dom';
import { NavDrawer } from './components/NavDrawer';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen">
      <NavDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
