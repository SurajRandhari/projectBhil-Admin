
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Banner from './pages/banner/Banner';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<MainLayout />} >
          <Route index element={<Dashboard/>} />
          <Route path="banner" element={<Banner/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
