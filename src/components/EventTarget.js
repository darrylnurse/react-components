import React, {useState} from "react";

export default function EventTarget(){
  const[blue, setBlue] = useState(true);

  const handleClick = event => {
    setBlue(!blue);
    if(!blue){
      event.target.style.background = "red";
    } else {
      event.target.style.background = "blue";
    }
  }

  return (
      <div className={"flex flex-col items-start gap-y-2 m-5 overflow-hidden text-white"}>
        <button className={"button-1 border-black border-1 bg-[blue] w-1/2 rounded-2xl p-5 color-transition"} onClick={handleClick}>Click Me</button>
        <button className={"button-2 border-black border-1 bg-[blue] w-1/2 rounded-2xl p-5 color-transition"} onClick={handleClick}>Click Me</button>
      </div>
  );
}