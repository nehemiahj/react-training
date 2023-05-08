import './App.css';
import Button from './components/Button/Button';

function App() {
  let count = 0;
  const btnClicked = (value) => {
    console.log("clicked ", count)
    count = count+1;
  }
  return (
    <div className="App" >
      <label>Count: {count}</label>
      <br/>
      <Button name="Inreament" btnClick={btnClicked} />
      <Button name="Decreament" btnClick={btnClicked}/>
    </div>
  );
}

export default App;
