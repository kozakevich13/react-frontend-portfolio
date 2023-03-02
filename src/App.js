import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/react-frontend-portfolio/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/react-frontend-portfolio/about' element={<About/>} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
