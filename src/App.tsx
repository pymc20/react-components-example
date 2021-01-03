import './App.css';
import Button from "react-components-example/dist/Button.js";


function App() {
  return (
    <div className="App">
      <Button
          style={{background:'red'}}
          title={'버튼'}
          onClick={()=>console.log('테스트!!')}
      />
    </div>
  );
}

export default App;
