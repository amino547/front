import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import BottomNav from "./components/navigation/BottomNav";
import Home from "./pages/Home"; 
import DashboardPage from "./pages/DashboardPage";  
import UserPage from "./pages/UserPage";  
import WorkoutPage from "./pages/WorkoutPage";  
import ExercisePage from "./pages/ExercisePage"; 
import  UserInfo  from './pages/UserInfo';
import WorkoutPlans from './components/workout/WorkoutPlans';
import ExercisePath from "./pages/ExercisPath";  
import Signup from "./pages/Signup";  
import Signin from "./pages/Signin";  
import Setting from "./pages/Setting";  
import ResizeObserver from 'resize-observer-polyfill';
import { AuthProvider } from './context/AuthContext';  
import "./App.css";

window.ResizeObserver = ResizeObserver;

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-info" element={<UserInfo />} />
              <Route path="/workout-plans" component={WorkoutPlans} />
              <Route path="/exercise-path" element={<ExercisePath />} />
              <Route path="/user-page" element={<UserPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<UserPage />} />
              <Route path="/workouts" element={<WorkoutPage />} />
              <Route path="/exercises" element={<ExercisePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;