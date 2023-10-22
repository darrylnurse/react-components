import React, {useState} from "react";

export default function DivSelector(props){

  const[selected, setSelected] = useState({});

  const clickSelect = (div) => {
    setSelected({active: div});
  }

  let character = props.symbol;
  const itemArray = [];

  for(let i = 0; i < props.number; i++){
    itemArray.push(character);
    character += character[0];
  }

  return (
      <div className={"flex"}>

        <div className={"flex overflow-hidden m-5 rounded-2xl text-center w-1/2"}>
          {itemArray.map((item) => (
            <div onClick={() => clickSelect(`${item}-div`)}
                 className={`${selected.active === `${item}-div` ? `active` : `inactive`} flex justify-center bg-[#5D4BA0] text-white p-5 border-r border-white last:border-none overflow-hidden cursor-pointer`}
                 key={item.id} >
              {item}
            </div>
          ))}
        </div>

        <div>
          <div onClick={() => clickSelect("")} className={"bg-[#5D4BA0] p-5 m-5 rounded-2xl text-white text-center cursor-pointer reset"}>Reset</div>
        </div>

      </div>
  );
}