import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import HomePage from "./components/pages/HomePage/HomePage";
import Header from "./components/UI/Header/Header";
import './index.css';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/about" element={<AboutPage/>}></Route>
              <Route path="/aboutProject" element={<h1>h1</h1>}></Route>
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
