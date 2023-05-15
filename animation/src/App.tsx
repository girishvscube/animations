import React from "react";
import Animation from "./Animation";
import AnimationGsap from "./AnimationGsap";
import AnimationBox from "./AnimationBox";

function App() {
  return (
    <div className="w-full bg-blue-200  flex justify-center items-center flex-col gap-96">
      <Animation />
      <AnimationGsap />
      <AnimationBox />
    </div>
  );
}

export default App;
