import { Counter } from "./1_pow/Counter";
import { Counter as Counter2 } from "./2_rexCon/Counter";
import { CounterRed } from "./2_rexCon/ex1/CounterRed";
import { Counter3 } from "./2_rexCon/ex2/Counter3";
import { CounterEx3 } from "./2_rexCon/ex3/CounterEx3";
import { TodoList } from "./3_Todo/TodoList";
import { Users } from "./4_UserList/Users";
import { TodoList2 } from "./5_MetTodo/TodoList";
import { TodoList3 } from "./6_ex6/TodoList3";
import { Ex7 } from "./7_intermediate/Ex7";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
      <CounterRed />
      <Counter3 />
      <CounterEx3 />
      <TodoList />
      <Users />
      <TodoList2 />
      <TodoList3 />
      <Ex7 />
    </div>
  );
}

export default App;
