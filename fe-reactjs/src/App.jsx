import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useNavigate} from "react-router-dom";
import Register from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPages';
import DashboardPage from './pages/dashboard/Dashboard';
import MySchedulePage from './pages/myshedule/ShedulePage';
import useAuthStore from './store/useAuthStore';
import { useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const { isTokenExpired, logout } = useAuthStore(state => ({
    token: state.token,
    isTokenExpired: state.isTokenExpired,
    logout: state.logout
  }));

  useEffect(() => {
    if (isTokenExpired()) {
      logout(); 
      navigate("/login");
    }
  }, [isTokenExpired, logout, navigate]);
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/myschedule" element={<ProtectedRoute element={MySchedulePage} />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
