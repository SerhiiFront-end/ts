import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Header from "./UI/Header/Header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
            <Routes>
              <Route path="/" element={<h1>h1</h1>}></Route>
              <Route path="/about" element={<h1>h1</h1>}></Route>
              <Route path="/aboutProject" element={<h1>h1</h1>}></Route>
              <Route path="/shop" element={<h1>h1</h1>}></Route>
              <Route path="/help" element={<h1>h1</h1>}></Route>
              <Route path="/donate" element={<h1>h1</h1>}></Route>
              <Route path="/involved" element={<h1>h1</h1>}></Route>
              <Route path="/contact" element={<h1>h1</h1>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
