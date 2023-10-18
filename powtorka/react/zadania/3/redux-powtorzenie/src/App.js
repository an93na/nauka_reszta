import { Counter } from "./1_pow/Counter";
import { Counter as Counter2 } from "./2_rexCon/Counter";
import { CounterRed } from "./2_rexCon/ex1/CounterRed";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
      <CounterRed/>
    </div>
  );
}

export default App;
