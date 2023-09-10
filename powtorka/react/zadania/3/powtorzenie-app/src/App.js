import { KomponentFunkcyjny } from "./0/KomponentFunkcyjny";
import { MyFirstComponent } from "./0/ex1/ex1";
import { StyleCSS } from "./1_style/StyleCSS";
import { StyleInline } from "./1_style/StyleInline";


function App() {
  return (
    <div className="container">
      <KomponentFunkcyjny/>
      <MyFirstComponent/>
      <StyleInline/>
      <StyleCSS/>
    </div>
  );
}

export default App;
