import Card from "./day2/Card";
import "./App.css"

const App = ()=>{
  return (
    //화면에 보여지는 영역: JSX
    <div className="card-wrap">
      <Card file='1' title='DAY1' />
      <Card file='2' title='DAY2' />
      <Card file='3' title='KREW DAY' />
    </div>
  );
}
export default App;