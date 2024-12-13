import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from "./Component/Homepage";
import Productdetail from "./Component/Productdetail";

function App() {
  return (
    <>
<BrowserRouter>
<Routes>

  <Route path='/' element={<Homepage/>}/>
  <Route path='/:id' element={<Productdetail />} />
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
