import React, {useState, useEffect} from "react";

export default function UseEffect(){
  const [number, setNumber] = useState(0);
  const [isBlue, setBlue] = useState(false);

  let color;

  if(isBlue){
    color = "blue";
  } else {
    color = "red";
  }

  const changeColor = () => {
    setBlue(!isBlue);
  }

  const increaseNumber = () => {
    setNumber(number + 1);
  }

  useEffect(() => {
    document.getElementById("result").innerText = number.toString();
    document.getElementById("color").innerText = color;
  });

  const classString = "bg-sky-600 p-2 rounded-2xl";

  const colorStyle = {
    "background-color": color,
    "transition-property": "background-color",
    "transition-duration": "0.5s",
    "transition-timing-function": "ease"
  }

  return (
      <div className={"flex flex-row justify-evenly text-center m-5 p-5 bg-sky-400 w-1/2 rounded-2xl items-center text-white"}>
        <div className={"flex flex-col gap-y-2"}>
          <div id={"result"} className={classString}></div>
          <div onClick={increaseNumber} className={`${classString} cursor-pointer select-none`}>Click here</div>
        </div>
        <div className={"flex flex-col gap-y-2"}>
          <div id={"color"} className={classString} style={colorStyle}>{color}</div>
          <div onClick={changeColor} className={`${classString} cursor-pointer select-none`}>Click here</div>
        </div>
      </div>
  );
}