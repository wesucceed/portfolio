import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Homepage/Home';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    
  )
}
export default App