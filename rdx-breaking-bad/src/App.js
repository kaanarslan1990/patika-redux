import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <h2>Users</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

export default App;
