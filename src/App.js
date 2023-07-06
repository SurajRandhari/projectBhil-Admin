
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Banner from './pages/banner/Banner';
import Blog from './pages/blog/Blog';
import Faq from './pages/Faq/Faq';
import Notification from './pages/notification/Notification';
import Footer from './pages/footer/Footer';
import Home from './pages/pages/home/Home';
import About from './pages/pages/about/About';
import Services from './pages/pages/services/Services';
import Setting from './pages/setting/Setting';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<MainLayout />} >
            <Route index element={<Dashboard/>} />
            <Route path="banner" element={<Banner/>} />
            <Route path='blog' element={<Blog/>} />
            <Route path='Faq' element={<Faq/>} />
            <Route path="notification" element={<Notification/>} />
            <Route path='footer' element={<Footer/>} />
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="setting" element={<Setting/>} />
          
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
