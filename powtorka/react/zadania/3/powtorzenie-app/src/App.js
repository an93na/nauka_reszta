import { KomponentFunkcyjny } from "./0_komponent/KomponentFunkcyjny";
import { MyFirstComponent } from "./0_komponent/ex1/ex1";
import { StyleCSS } from "./1_style/StyleCSS";
import { StyleCSSModules } from "./1_style/StyleCSSModules";
import { StyleInline } from "./1_style/StyleInline";
import { StyleCSSExercise } from "./1_style/ex1/StyleCSSExercise";


function App() {
  return (
    <div className="container">
      <KomponentFunkcyjny/>
      <MyFirstComponent/>
      <StyleInline/>
      <StyleCSS/>
      <StyleCSSModules/>
      <StyleCSSExercise/>
    </div>
  );
}

export default App;
