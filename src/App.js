import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Setpassword from './pages/Setpassword';
import MyDashboard from './pages/MyDashboard';
import LedgerReport from './pages/LedgerReport';
import ChangePassword from './pages/ChangePassword';
import CreateSuperDistributor from './pages/CreateSuperDistributor';
import ViewSuperDistributor from './pages/ViewSuperDistributor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<Forgotpassword />} />
        <Route path='/set-password' element={<Setpassword />} />
        <Route path='/admin' element={<MainLayout />} >
          <Route index element={<MyDashboard />} />
          <Route path='change-password' element={<ChangePassword />} />
          <Route path='create-super-distributor' element={<CreateSuperDistributor />} />
          <Route path='view-super-distributor' element={<ViewSuperDistributor />} />
          <Route path='ledger-report' element={<LedgerReport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
