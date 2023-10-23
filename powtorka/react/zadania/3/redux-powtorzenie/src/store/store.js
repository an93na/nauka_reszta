// store trzyma globalny stan aplikacji
//  a plik z reducer czyli counterSlice to taki plik
//  z kawałkami stanu

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../1_pow/counterSlice";
import counterReducer2 from "../1_pow/counterSlice2";
import counterReducer3 from "../2_rexCon/conterSlice";
import counterReducer4 from "../2_rexCon/ex1/conterSliceEx";
import counterReducer5 from "../2_rexCon/ex2/counterSlice";
import counterReducer6 from "../2_rexCon/ex3/counterSliceEx3";
import todoReducer from "../3_Todo/sliceTodoList";

export const store = configureStore({
  // reducer zbiera nam te kawałki stanu
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    counter3: counterReducer3,
    nazwaUzyta: counterReducer4,
    counter5: counterReducer5,
    counter6: counterReducer6,
    todo: todoReducer,
  },
});
