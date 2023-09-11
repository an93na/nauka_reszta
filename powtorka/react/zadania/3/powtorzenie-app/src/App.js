import { KomponentFunkcyjny } from "./0_komponent/KomponentFunkcyjny";
import { MyFirstComponent } from "./0_komponent/ex1/ex1";
import { StyleCSS } from "./1_style/StyleCSS";
import { StyleCSSModules } from "./1_style/StyleCSSModules";
import { StyleInline } from "./1_style/StyleInline";
import { StyleCSSExercise } from "./1_style/ex1/StyleCSSExercise";
import { StyleCSSExercise2 } from "./1_style/ex2/StyleCSSExercise2";
import { StyleInlineExercise } from "./1_style/ex3/StyleInlineExercise";
import { Metric } from "./1_style/ex4/Metric";
import { Relacje } from "./2_relacjeKomponenty/Relacje";
import { AppMetric } from "./2_relacjeKomponenty/ex1/AppMetric";

function App() {
  return (
    <div className="container">
      <KomponentFunkcyjny />
      <MyFirstComponent />
      <StyleInline />
      <StyleCSS />
      <StyleCSSModules />
      <StyleCSSExercise />
      <StyleCSSExercise2 />
      <StyleInlineExercise />
      <Metric />
      <Relacje />
      <AppMetric />
    </div>
  );
}

export default App;
