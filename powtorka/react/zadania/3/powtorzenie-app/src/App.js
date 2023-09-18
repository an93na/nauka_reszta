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
import { Relacje2 } from "./2_relacjeKomponenty/Relacje2";
import { AppMetric } from "./2_relacjeKomponenty/ex1/AppMetric";
import { AppEx2 } from "./2_relacjeKomponenty/ex2/AppEx2";
import { Assets } from "./3_assety/Assets";
import { KomponentBezStanu } from "./4_stanKomponentu/KomponentBezStanu";
import { StanKomponentu } from "./4_stanKomponentu/StanKomponentu";
import { WyswietlStan } from "./4_stanKomponentu/ex1/WyswietlStan";
import { Eventy } from "./5_Eventy/Eventy";
import { Counter } from "./5_Eventy/components/Counter";
import { ParametryFunkcji } from "./6_parametryFunkcji/ParametryFunkcji";
import { ListyTabele } from "./7_listyTabele/ListyTabele";
import { Numbers } from "./7_listyTabele/ex1/Numbers";

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
      <Relacje2 />
      <AppEx2 />
      <Assets />
      <KomponentBezStanu />
      <StanKomponentu />
      <WyswietlStan />
      <Eventy />
      <Counter />
      <ParametryFunkcji/>
      <ListyTabele/>
    </div>
  );
}

export default App;
