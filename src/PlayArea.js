import React, {useState} from "react";
import DealButton from './DealButton'
import Bench from './Bench'
function PlayArea() {
  const {benchList, setBenchList} = useState([]);
  const { activeCard, setActiveCard } = useState();
  const onCardClick = (name, base_experience, height, weight, sprites) => {
    setActiveCard()
  }
  return (
    <div>
      <Bench benchList={benchList} onCardClick={onCardClick}></Bench>
      <DealButton benchList={benchList} setBenchList={setBenchList} onCardClick={onCardClick}></DealButton>
    </div>
  );
}

export default PlayArea;