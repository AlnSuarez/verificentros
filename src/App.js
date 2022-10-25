import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import "./styles/mui.css"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Dashboard />} />
                    <Route path="/SignIn" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
