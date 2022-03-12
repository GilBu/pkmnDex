import logo from './logo.svg';
import './App.css';
import PlayArea from './PlayArea'

function App() {
  return (
    <PlayArea />
  );
}
/*compoents: 
  Card:
    name
    base exp
    heigh
    width
    img
    face: bool

  deal button:
    query function(id)
    onclickFn:
      randomgen 1-500
      call queryfn
      create card element with response
      store card element in array/state


  bench
  active
  playArea:
    bench card list
    cardClickfn:
      replace card from bench with blank
      flip card
      replace active with card

*/
export default App;
