import NavbarComponent from "./Components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import { Error } from "./Pages/Error";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails"; 
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import Login from "./Pages/Login";
import { Market } from "./Pages/Market";
import Register from "./Pages/Register";
import "./index.css"; 
import "./App.css"; 
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} /> {/* Add this route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News key="business" country="in" category="business"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/market" element={<Market />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
