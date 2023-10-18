// store trzyma globalny stan aplikacji
//  a plik z reducer czyli counterSlice to taki plik
//  z kawałkami stanu

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../1_pow/counterSlice";
import counterReducer2 from "../1_pow/counterSlice2";
import counterReducer3 from "../2_rexCon/conterSlice";
import counterReducer4 from "../2_rexCon/ex1/conterSliceEx";

export const store = configureStore({
  // reducer zbiera nam te kawałki stanu
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    counter3: counterReducer3,
    counter4: counterReducer4,
  },
});
