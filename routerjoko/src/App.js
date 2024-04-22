import React from 'react';
import './App.css';
import State from './State';
import StateObject from './StateObject';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Timers from "./timer";
import Depend from "./timerDependant";
import FormName from "./formNama";
import MultipleForm from './multipleform';
import DropDown from "./DropDown";

function App() {
  return (
    <div>
    <Timers/>
    <Depend/>
    <FormName/>
    <MultipleForm/>
    <DropDown/>
    <State/>
    <StateObject/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
