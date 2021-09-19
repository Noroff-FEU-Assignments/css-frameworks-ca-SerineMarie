import './sass/style.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink
// } from "react-router-dom";
// import Home from './components/home/Home';
// import Contact from './components/contact/ContactContent';
// import News from './components/news/NewsContent';
import Footer from './components/footer/FooterContent';
import Navigation from './components/navigation/NavigationContent'

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


function App() {
  return (
    <>
    <div className="wrapper">
      <Navigation/>
      </div>
      <Footer/>
    
  </>
  
    
  );
}

export default App;
