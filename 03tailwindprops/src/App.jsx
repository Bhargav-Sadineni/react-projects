// src/App.jsx
import React, { useState } from "react";
import "./App.css"; // make sure this imports your Tailwind-built CSS
import Card from "./components/card";
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  let myObj ={
    username: "hitesh",
    age:21
  }
  let newarr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 rounded-xl p-4">Tailwind test</h1>
      <Card channel="chaiaurcode" someobj={myObj} />
      <Card arr={newarr} channel="bhargav" btntext="click me"/>

      
    </>
  );
}
