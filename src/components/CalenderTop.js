import React, {useState} from "react";
import arrow from "../images/arrow.png"

export default function CalenderTop(){
  const [time, setTime] = useState({
    daytime: "am",
    hours: 12,
    minutes: 0,
  });

  // const addMinutes = () => {
  //   setTime({
  //     daytime: time.daytime,
  //     hours: time.hours,
  //     minutes: time.minutes + 1
  //   })
  //
  //   if(time.minutes >= 59) {
  //     setTime({
  //       daytime: time.daytime,
  //       hours: (time.hours === 12 ? 1 : time.hours + 1),
  //       minutes: 0
  //     });
  //   }
  // }
  // const subtractMinutes = () => {
  //   setTime({
  //     daytime: time.daytime,
  //     hours: time.hours,
  //     minutes: time.minutes - 1
  //   })
  //
  //   if(time.minutes <= 0) {
  //     setTime({
  //       daytime: time.daytime,
  //       hours: (time.hours === 1 ? 12 : time.hours - 1),
  //       minutes: 59
  //     });
  //   }
  // }
  //
  // const addHours = () => {
  //   setTime({
  //     daytime: time.daytime,
  //     hours: time.hours + 1,
  //     minutes: time.minutes
  //   })
  //
  //   if(time.hours >= 12 ){
  //     setTime({
  //       daytime: time.daytime,
  //       hours: 1,
  //       minutes: time.minutes
  //     })
  //   }
  //
  //   if(time.hours === 11){
  //     setTime({
  //       daytime: (time.daytime === "pm" ? "am" : "pm"),
  //       hours: time.hours + 1,
  //       minutes: time.minutes
  //     })
  //   }
  // }
  //
  // const subtractHours = () => {
  //   setTime({
  //     daytime: time.daytime,
  //     hours: time.hours - 1,
  //     minutes: time.minutes
  //   })
  //
  //   if(time.hours <= 1 ){
  //     setTime({
  //       daytime: time.daytime,
  //       hours: 12,
  //       minutes: time.minutes
  //     })
  //   }
  //
  //   if(time.hours === 12){
  //     setTime({
  //       daytime: (time.daytime === "pm" ? "am" : "pm"),
  //       hours: time.hours - 1,
  //       minutes: time.minutes
  //     })
  //   }
  // }

  const adjustTime = (hourChange, minuteChange, daytimeChange) => {
    const newMinutes = (time.minutes + minuteChange + 60) % 60;
    const hourAdjustment = Math.floor((time.minutes + minuteChange) / 60) + hourChange;
    const newHours = ((time.hours + hourAdjustment + 12) % 12) || 12;
    const newDaytime = hourChange ? ((time.hours === (hourChange > 0 ? 11 : 12) ? (time.daytime === "pm" ? "am" : "pm") : time.daytime)) : (daytimeChange ? (time.daytime === "pm" ? "am" : "pm") : time.daytime);

    setTime({
      daytime: newDaytime,
      hours: newHours,
      minutes: newMinutes,
    });
  };

  const addMinutes = () => {
    adjustTime(0, 1, 0);
  };

  const subtractMinutes = () => {
    adjustTime(0, -1 , 0);
  };

  const addHours = () => {
    adjustTime(1, 0 , 0);
  };

  const subtractHours = () => {
    adjustTime(-1, 0 , 0);
  };

  const changeDaytime = () => {
    adjustTime(0,0,1);
  }

  return (
    <div className={"grid grid-cols-3 gap-y-5 lg:px-32 md:px-20 sm:px-0 text-center text-white bg-fuchsia-500 w-1/4 rounded-2xl m-5 p-5 select-none"}> {/*need to make responsive*/}

      <div onClick={addHours} className={"flex justify-center rounded-2xl cursor-pointer"}><img src={arrow} className={"active:scale-[105%] rotate-[270deg] h-5 invert"} alt={"arrow"}/></div>
      <div onClick={addMinutes} className={"flex justify-center rounded-2xl cursor-pointer"}><img src={arrow} className={"active:scale-[105%] rotate-[270deg] h-5 invert"} alt={"arrow"}/></div>
      <div onClick={changeDaytime} className={"flex justify-center rounded-2xl cursor-pointer"}><img src={arrow} className={"active:scale-[105%] rotate-[270deg] h-5 invert"} alt={"arrow"}/></div>

      <div>{time.hours}</div>
      <div>{time.minutes.toString().length === 1 ? '0' + time.minutes.toString() : time.minutes}</div>
      <div>{time.daytime}</div>

      <div onClick={subtractHours} className={"flex justify-center rounded-2xl cursor-pointer"}><img src={arrow} className={"active:scale-[105%] rotate-90 h-5 invert"} alt={"arrow"}/></div>
      <div onClick={subtractMinutes} className={"flex justify-center rounded-2xl cursor-pointer"}><img src={arrow} className={"active:scale-[105%] rotate-90 h-5 invert"} alt={"arrow"}/></div>
      <div onClick={changeDaytime} className={"flex justify-center rounded-2xl cursor-pointer"}><img src={arrow} className={"active:scale-[105%] rotate-90 h-5 invert"} alt={"arrow"}/></div>

    </div>
  );
}
