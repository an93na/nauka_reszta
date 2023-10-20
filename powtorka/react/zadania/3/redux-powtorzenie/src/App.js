import { Counter } from "./1_pow/Counter";
import { Counter as Counter2 } from "./2_rexCon/Counter";
import { CounterRed } from "./2_rexCon/ex1/CounterRed";
import { Counter3 } from "./2_rexCon/ex2/Counter3";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
      <CounterRed />
      <Counter3 />
    </div>
  );
}

export default App;
