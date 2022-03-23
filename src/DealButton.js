
import Card from './Card';
const DealButton = ({benchList, handleDealClick, onCardClick}) => {

  const onClickDeal = () => {
    for(let i=0; i < 5; i++){
      const randNum = Math.random(500)
      const newCard = <Card face={false} id={randNum} onCardClick={onCardClick}></Card>
      const currentBench = benchList;
      console.log(currentBench)
      currentBench.push(newCard);
      handleDealClick(currentBench);
    }
    console.log(benchList)

  }
  return (
    <button onClick={onClickDeal}>
      Deal Cards
    </button>
  );
}

export default DealButton;