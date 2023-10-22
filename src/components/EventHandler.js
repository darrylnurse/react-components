import React, {useState} from "react";

export default function EventHandler(){

  const [wide, setWide] = useState(false);

  const click = (e) => {
    setWide(!wide);
  }

  return(
      <div className={"p-5 relative"}>
        <div onClick={click} className={`${wide ? "wideBox" : "narrowBox"} p-5 bg-amber-700 rounded-2xl text-center text-white cursor-pointer inline-block`}>
          Click me
        </div>
        <div className={`p-5 bg-amber-700 rounded-2xl text-center text-white cursor-pointer inline-block`}>
          Don't Click me
        </div>
      </div>
  );
}