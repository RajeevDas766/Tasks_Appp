import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import TasksOverview from './pages/TasksOverview.jsx';
import GoSocial from './pages/GoSocial.jsx';
import TaskDetails from './pages/TaskDetails.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation bar at top, aligned left */}
        <header className="bg-white shadow px-72 py-2">
          <Navigation />
        </header>

        {/* Main content below Navigation */}
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Routes>
            <Route path="/" element={<TasksOverview />} />
            <Route path="/social" element={<GoSocial />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
