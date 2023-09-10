import React from "react";
import classes from './StyleCSSExercise2.module.css'

/**
 * Twoim zadaniem jest odwzorowanie designu z pliku design.png
 * do ostylowania komponentu użyj zewnętrzengo pliku ze stylami
 * oraz podejćia css modules - pamiętaj o poprawnym zaimportowaniu styli
 *
 * plik ze stylami musisz uprzednio stworzyć w tym samym folderze - pamiętaj o odpowiednim suffixie w nazwie
 */

export const StyleCSSExercise2 = () => {
  return (
    <article style={{backgroundColor: 'white'}}>
      <p style={{color: 'black'}}>Style CSS Modules</p>
      <p className={classes.pogrubienie}>Zadania do zrobienia</p>
      <ul>
        <li className={classes.zielona}>Pouczyć się JSa</li>
        <li className={classes.zielona}>Pouczyć się CSSa</li>
        <li className={`${classes.przekreslenie} ${classes.niebieska}`}>Pouczyć się Reacta</li>
      </ul>
    </article>
  );
};
