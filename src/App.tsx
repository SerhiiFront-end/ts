import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./UI/Header/Header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/c" element={<h1>h1</h1>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
