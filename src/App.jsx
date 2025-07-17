import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './component/Footer';
import LandingPage from './component/LandingPage';
import MenSection from './component/MenSection';
import WomenSection from './WomenSection';
import Shop from './Shop';
import './App.css';
import Cart from './component/Cart';
import Login from './component/Login';
import SignUp from './component/SignUp';
function App() {
  return (
    <div className='flex justify-center sm:ml-20 '>
    
    <Router>
      <div className="w-full min-h-screen flex flex-col ">
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/MenSection" element={<MenSection />} />
          <Route path="/WomenSection" element={<WomenSection />} />
          <Route path="/Shop" element={<Shop />} />
           <Route path="/Cart" element={<Cart/>} />
             <Route path="/Login" element={<Login/>} />
               <Route path="/SignUp" element={<SignUp/>} />
          <Route
            path="*"
            element={
              <h2 className="text-center text-xl mt-10">404 - Page Not Found</h2>
            }
          />
        </Routes>

      <Footer />
      </div>
    </Router>

</div>
  );
}

export default App;
