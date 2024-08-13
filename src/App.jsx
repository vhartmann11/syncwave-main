import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import News from "./pages/News"
import Navbar from "./components/Navbar";
import Breathing from "./components/Breathing";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import './App.css'
import ArticleDetails from "./components/News/ArticleDetails";


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Breathing />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<ArticleDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
