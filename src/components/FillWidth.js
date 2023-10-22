import React, {useState} from "react";

export default function FillWidth () {

  const [display, setDisplay] = useState(true);

  const clickDisplay = () => {
    setDisplay(!display);
  }

  console.log(display);

  let className = "";
  if(display){
    className += "w-1/2";
  }

  return (
      <div className={"bg-amber-400 cursor-pointer caret-transparent rounded-2xl w-1/2 m-5 overflow-hidden"}>
        <div onClick={clickDisplay} className={`${className} bg-emerald-600 text-center p-5`}>Hello</div>
        <div onClick={clickDisplay} className={`${className} bg-emerald-600 text-center p-5`}>World</div>
      </div>
  );
}