import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/c" element={<h1>h1</h1>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
