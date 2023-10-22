import React from "react";

export default function Price(){

  const priceNumber = 5;
  let dollarSign = '$';

  let priceArray = [];

  for(let i = 0; i < priceNumber; i++){
    priceArray.push(dollarSign);
    dollarSign += '$';
  }

  return (
    <div className={"relative flex justify-evenly text-white text-center bg-violet-700 m-5 rounded-2xl w-1/2 overflow-hidden"}>
      {priceArray.map((item) => (
        <div className={`p-5 hover:bg-violet-500 active:bg-violet-400 last:border-none border-r border-white cursor-pointer caret-transparent w-1/2`}>{item}</div>
      ))}
    </div>
  );
}