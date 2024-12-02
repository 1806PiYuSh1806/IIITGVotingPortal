import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Routers from "./Routers/Routers";

function App() {
  return (
    <BrowserRouter> {/* Wrap everything in BrowserRouter */}
      <div>
        <Routers />
      </div>
    </BrowserRouter>
  );
}

export default App;
