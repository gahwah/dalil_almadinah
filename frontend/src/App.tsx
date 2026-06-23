import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ToursList from './pages/Tours/ToursList';
import TourDetails from './pages/Tours/TourDetails';
import GuideProfile from './pages/Guides/GuideProfile';
import BookingCheckout from './pages/Bookings/BookingCheckout';
import VisitorDashboard from './pages/Dashboards/VisitorDashboard';
import GuideDashboard from './pages/Dashboards/GuideDashboard';
import AdminDashboard from './pages/Dashboards/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Poster from './pages/Poster/Poster';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<ToursList />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/guides/:id" element={<GuideProfile />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route 
          path="/book/:tourId" 
          element={
            <ProtectedRoute>
              <BookingCheckout />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/dashboard/visitor" 
          element={
            <ProtectedRoute allowedRoles={['visitor']}>
              <VisitorDashboard />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/dashboard/guide" 
          element={
            <ProtectedRoute allowedRoles={['guide']}>
              <GuideDashboard />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/dashboard/admin" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
