// ZAD21

const wpisy = [
    {
      title: "wpis 1",
      subTitle: "podtytuł - wpis 1",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
      quidem repellat quam officia facere.`,
    },
    {
      title: "wpis 2",
      subTitle: "podtytuł - wpis 2",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
      quidem repellat quam officia facere.`,
    },
    {
      title: "wpis 3",
      subTitle: "podtytuł - wpis 3",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
      quidem repellat quam officia facere.`,
    },
  ];

  // funkcja przyjmuje post i to będzie obiekt. Czyli możemy sobie przekazać te posty z góry przy pomocy pętli np map albo forEach
const renderPost = (post) => {
    // tworzymy html przy pomocy stringa
    const html = `
      <h2>${post.title}</h2> 
      <h3>${post.subTitle}</h3>
      <p>
         ${post.paragraph}
      </p>
      <a role="a">Czytaj dalej...</a>
      `;
      // u góry stosujemy konkatynacje stringów i wrzucamy tam dane
     
    // tworzymy nowy element article
    const article = document.createElement("article");
  
    // w tym obiekcie article umieszczamy albo odczytujemy kod html któey jest pomiędzy <article>...tu to ...</article>
    article.innerHTML = html;
  
    // pobieramy istniejący element z pliku index.html. Wyciągamy element z main i klasy container. I wstrzykujemy te
    // artykuły za <h1> ....
    document.querySelector("main.container").appendChild(article);
  };
  
  // Wywołanie naszej funkcji z postami
  // renderPost(wpisy[0]);
  // renderPost(wpisy[1]);
  // renderPost(wpisy[2]);
  

//  takie pojedyńcze jest mało optymalne dlatego stosujemy forEach który renderuje wszytskie posty 
wpisy.forEach((wpis) => {
  renderPost(wpis);
});

// forEch nic nie zwraca a map już tak ale w naszym przypadku nic nie dostaniemy bo to tworzenie html to taki "efekt uboczny"

