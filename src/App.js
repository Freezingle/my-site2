import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Footer from './components/Footer'
import Home from "./pages/home";
import News from './pages/News'
import NewsArticle from './components/NewsArticle'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/news"  element = {<News />} />
        <Route path="/news/:code" element= {<NewsArticle />} />

      </Routes>
      <Footer />
      </Router>
     
    </div>
  );
}

export default App;
