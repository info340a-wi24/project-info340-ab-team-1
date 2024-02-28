import React from "react";
import NavBar from "./components/Nav";
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";

export function App() {
  return (
    <>
		<NavBar />
		<Routes>
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Home />} />
			<Route path="/register" element={<Register />} />
		</Routes>
    </>
  );
}

export default App;
