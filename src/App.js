import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import AdminDashboard from './components/Admin';
//import SignIn from './components/SignIn';
import Membres from './compo/Members';
import Trainers from './compo/Trainers';
import Equipment from './compo/Equipment';
import Packages from './compo/Packages';
import AddTrainer from './List/AddTrainer';
import ViewTrainer from './List/ViewTrainer';
import ApproveTrainer from './List/ApproveTrainer';
import EditTrainer from './Edit/EditTrainer';
import TrainerShift from './List/TrainerShift';
import AddMember from './List1/AddMember';
import ViewMembers from './List1/ViewMember';
import MemberPackage from './List1/MemberPackage';
import ApproveMember from './List1/ApproveMember';
import AddEquipment from './List2/AddEquipment';
import ViewEquipment from './List2/ViewEquipment';
import ViewPackage from './List3/ViewPackage';
import AddPackage from './List3/AddPackage';
import { TrainerProvider } from './context/TrainerContext';
import { MemberProvider } from './context/MemberContext';
import { EquipmentProvider } from './context/EquipmentContext';
import EditEquipment from './Edit/EditEquipment';
import EditPackage from './Edit/EditPackage';
import { PackageProvider } from './context/PackageContext';
import EditMember from './Edit/EditMember';
import Navbar from './components/navigation/Navbar';
import Sidebar from './components/navigation/Sidebar';
import BottomNav from './components/navigation/BottomNav';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import UserPage from './pages/UserPage';
import WorkoutPage from './pages/WorkoutPage';
import ExercisePage from './pages/ExercisePage';
import UserInfo from './pages/UserInfo';
import WorkoutPlans from './components/workout/WorkoutPlans';
import ExercisePath from './pages/ExercisPath';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProUse from './pages/ProUse';
import ResizeObserver from 'resize-observer-polyfill';
import { AuthContext, AuthProvider, useAuth } from './context/AuthContext';
import { ExerciseProvider } from './context/ExerciseContext';
import { UserProvider } from './context/UserContext';
import UpdateProfile from './pages/Update';
import './App.css';

window.ResizeObserver = ResizeObserver;

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <ExerciseProvider>
            <TrainerProvider>
              <MemberProvider>
                <EquipmentProvider>
                  <PackageProvider>
                    <MainContent />
                  </PackageProvider>
                </EquipmentProvider>
              </MemberProvider>
            </TrainerProvider>
          </ExerciseProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
};

const MainContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isSigninPage = location.pathname === '/signin';
  const isSignupPage = location.pathname === '/signup';
  const isSettingPage = location.pathname === '/settings';

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {!isSigninPage && !isSignupPage && isAuthenticated && <Navbar />}
      {!isSigninPage && !isSignupPage && isAuthenticated && (
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <main className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<Signin />} />
          <Route path="/dashboardadmin" element={<AdminDashboard />} />
          <Route path="/members" element={<Membres />} />
          <Route path="/view-trainer" element={<ViewTrainer />} />
          <Route path="/approve-trainer" element={<ApproveTrainer />} />
          <Route path="/edit-trainer/:id" element={<EditTrainer />} />
          <Route path="/trainer-shift" element={<TrainerShift />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/add-trainer" element={<AddTrainer />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/view-member" element={<ViewMembers />} />
          <Route path="/edit-member/:id" element={<EditMember />} />
          <Route path="/member-package" element={<MemberPackage />} />
          <Route path="/approve-member" element={<ApproveMember />} />
          <Route path="/add-equipment" element={<AddEquipment />} />
          <Route path="/view-equipment" element={<ViewEquipment />} />
          <Route path="/edit-equipment/:id" element={<EditEquipment />} />
          <Route path="/view-package" element={<ViewPackage />} />
          <Route path="/add-package" element={<AddPackage />} />
          <Route path="/edit-package/:id" element={<EditPackage />} />

          {/* User Routes */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/exercise-path" element={<ExercisePath />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <DashboardPage /> : <Navigate to="/signin" />}
          />
          <Route
            path="/prouse"
            element={isAuthenticated ? <ProUse /> : <Navigate to="/signin" />}
          />
          <Route
            path="/workouts"
            element={isAuthenticated ? <WorkoutPage /> : <Navigate to="/workouts" />}
          />
          <Route
            path="/exercises"
            element={isAuthenticated ? <ExercisePage /> : <Navigate to="/exercises" />}
          />
          <Route
            path="/update-profile"
            element={isAuthenticated ? <UpdateProfile /> : <Navigate to="/signin" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
      {!isSigninPage && !isSignupPage && !isSettingPage && isAuthenticated && <BottomNav />}
    </>
  );
};

export default App;














