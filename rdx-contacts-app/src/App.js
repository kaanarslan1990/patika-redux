import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
