
import Card from './Card';
function DealButton(benchList, setBenchList, onCardClick) {

  const onClickDeal = () => {
    for(let i=0; i < 5; i++){
      const randNum = Math.random(500)
      const newCard = <Card face={false} id={randNum} onCardClick={onCardClick}></Card>
      const currentBench = benchList;
      currentBench.push(newCard);
      setBenchList(currentBench);
    }
    

  }
  return (
    <button onClick={onClickDeal}>
      Deal Cards
    </button>
  );
}

export default DealButton;