function Bench(benchList, onClickCard) {
  
  if(benchList.length > 0){
    return (
      <ul>
        {benchList.map(function(cardEle) {
            <li><button onClick={onClickCard}>{cardEle}</button></li>
          }
        )}
      </ul>
      
    );
  }

  return(
    <ul>
      <li>empty</li>
    </ul>
  )
}

export default Bench;