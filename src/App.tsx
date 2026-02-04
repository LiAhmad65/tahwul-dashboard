import { Routes, Route } from 'react-router-dom';
import { NavDrawer } from './components/NavDrawer';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen">
      <NavDrawer />
      <main className="flex-1 flex flex-col ">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
