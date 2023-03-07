import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';



import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/react-frontend-portfolio/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/react-frontend-portfolio/about' element={<About/>} />
          <Route path='/react-frontend-portfolio/contact' element={<Contact />} />
          <Route path='/react-frontend-portfolio/projects' element={<Projects />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
