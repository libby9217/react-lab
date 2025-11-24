import "./App.css"
import Card from "./day2/Card";
import State from "./day2/State";
import StateBase from "./day2/StateBase";

const App = ()=>{
  return (
    //화면에 보여지는 영역: JSX
    // <div className="card-wrap">
    //   <Card file='1' title='DAY1' />
    //   <Card file='2' title='DAY2' />
    //   <Card file='3' title='KREW DAY' />
    // </div>
    <div>
      <State />
    </div>
  );
}
export default App;