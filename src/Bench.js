const Bench = ({benchList, onClickCard}) => {
  console.log(benchList)
  if (benchList.length > 0){
    return (
      <ul>
        {benchList.map(function (cardEle, idx) {
          <li key={idx} ><button onClick={onClickCard}>{cardEle}</button></li>
        }
        )}
      </ul>
      
    );
  }

  return(
    <ul>
      {benchList.map(function (cardEle, idx) {
        <li key={idx} ><button onClick={onClickCard}>{cardEle}</button></li>
      }
      )}
      <li key='empty'>empty</li>
    </ul>
  )
}

export default Bench;