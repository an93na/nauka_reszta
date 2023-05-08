// let x: string;

// Funkcja i typy

// ta funkcja nic nie zwraca bo ma void
// argumenty też muszą mieć typy, mówi nam jakich typów oczekuje w tym przypadku funkcja

// function test(a: string, b:number): void {
//     console.log(a+b);
// }

//  nie możemy przekręcic tych argumentów to znaczy gdy mamy podać string to podajemy string a nie number
// test('234',234)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Tablice

// const tab: number[] = [12, 3, 4, 5];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Obiekty - bardziej złożone typy, zbiór właściwości i metod

// deklarujemy typ obiekowi mówimy jak to ma wyglądać tu zmienna x jest obiektem bo mamy {}
//
// let x: {
//   imie: string;
//   nazwisko: string;
//   wiek: number;
// };
// w definicji obiektu powinny być ; a nie , bo to jest ta róznica między definicją a obiektem który ma wartości

//  ten obiekt musi mieć te konkretne imie nazwisko i wiek alę wartości jakiekolwiek byle zgadzał się typ
// x = {
//   imie: "Jan",
//   nazwisko: "Kowalski",
//   wiek: 45,
// };

//  interfejs daje nam możliwość reużywania tego typu któy sobie zadeklarowaliśmy
// interface Osoba {
//   imie: string;
//   nazwisko: string;
//   wiek: number;
// }

// funkcja wykorzystująca interfejs Osoba
// function test(a: Osoba, b: Osoba): Osoba {
//   return x;
// }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// można też tworzyć typ złożne za pomocą konstrukcji type
//  interfejs i type różnią się składnią w interfejsie nie ma =
// na prezentacji doczytać i ogólnie czesciej będziemy stosować interfejsy
//  interfejs i type można stosować wzajemnie i interfejs spotykamy częściej 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Tablica

// tablica może być typem wielu interfejsów 

// let x: Osoba;
// const y: Osoba[] = [];

// Najważniejsze rzeczy w typeScript to:
//  typy na zmiennych, typy funkcji, typy argumentów, typy złożnone, czyli interfejsy

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
// Unie 
// trzeba pamiętać że typeScript to jest nadzbiór js
//  zmienna może miec więcej typów i to jest wymienne w js
//  typescript żeby to umożliwić storzył cos takiego jak unie
//  to jest złączenie zmiennych, możemy powiedziec że zmienna x może byc stringiem lub liczbą 
// mamy : że będziemy definiowć typ i mamy | co znaczy że to jest unia

// let zmienna : string|number = "3"
// zmienna = 2;
// zmienna = false tak już nie możemy bo powiedzieliśmy że może być string albo number a nie jakis boolean

// unie moża stosować też do funkcji
//  trzeba pamiętać żeby tego nie nadużywać bo jedak to ma nam pomóc przy typach

// let z: string | undefined = 'asd';
//   mówimy że z może być stringiem albo być undefined

// let mz = null;
//  można też dać null
//  tablice też można zdefiniować przy pomocy uni że zawierać mogą różne typy danych

// Type guard - Strażnik typów

// function mojaFun (ar:number | string): void {
//     console.log(ar.toLowerCase())
// }
//  Podkreśla bo mamy zadeklaroway też number a toLowerCase jest do stringow a z number sie tego nie da zrobić 

//  ale chcemy koniecznie wywołać toLowerCase miono uni i wtedy pojawia się możliwość sprawdzenie dzięki typeof
//  ten strażnik wpuści do if tylko coś co jest stringiem nic innego się nie prześlizgnie
// function mojaFun (ar:number | string): void {
//     if(typeof ar === 'string')
//     {console.log(ar.toLowerCase())
// }}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  enum jest to typ wyliczeniowy - nazwa nic nie mowi co on ma robić 
//  jest to sposób na definicję jakiejś flagi sterującej, albo jakiejś wartości mieszczącej się w danym zakreście
//  enum wylicza nam możliwe wartości
// mozna stosować jako typ ale nie można powiedziec że to jest typ to jest z tego samego pudełka co interface 

// enum Kolor {
//     Czarny,
//     Czerwony,
//     Zielony
// }

// let kolorOczu: Kolor = Kolor.Czarny;
// enum pod spodem to są liczby czyli 0 1 2. To jest zrobione w celach optymalzacjyjnych
//  0 = Czarny ale wyjmiemy to tak Kolor.Czarny
//  statusy zamowienia mogą być enumami

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Modyfikatory dostępu
//  tego nie ma w js, ale istnieje w wielu innych językach programowania
//  w js nie ma public i private a w typeScript jest i to jest dla programistów

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Zadanie 1 
//  Utwórz tablice obiektów Człowek. Dodaj kilka obikteów do tej tablicy a następnie wyświetl swszystkie szczegóły o tych obiektach

// interface Czlowiek {
//     imie: string;
//     nazwisko: string;
//     wiek: number;
//     dataUrodzenia: string;
// }

// let x: Czlowiek
// let y: Czlowiek
// let z: Czlowiek

// x = {
//     imie: 'Jasio',
//     nazwisko: 'Jan',
//     wiek: 40,
//     dataUrodzenia: '01-03-1983'
// }

// y = {
//     imie: 'Eleonora',
//     nazwisko: 'Emu',
//     wiek: 32,
//     dataUrodzenia: '04-09-1991'
// }

// z = {
//     imie: 'Kamil',
//     nazwisko: 'Kot',
//     wiek: 14,
//     dataUrodzenia: '13-12-2009'
// }

// const tab: Czlowiek[] = [x,y,z]

// tab.push({
//     imie: 'Kamila',
//     nazwisko: 'Kot',
//     wiek: 10,
//     dataUrodzenia: '23-09-2013'  
// })

// tab.forEach((item)=> console.log(item))


interface Czlowiek {
    imie: string;
    nazwisko: string;
    dataUrodzenia: string;
  }
  const czlowieki: Czlowiek[] = [];
  czlowieki.push({
    imie: "Jan",
    nazwisko: "Kowalski",
    dataUrodzenia: "01-01-1993",
  });
  czlowieki.push({
    imie: "Jan1",
    nazwisko: "Kowalski1",
    dataUrodzenia: "01-01-1992",
  });
  czlowieki.push({
    imie: "Jan2",
    nazwisko: "Kowalski2",
    dataUrodzenia: "01-01-1990",
  });
  czlowieki.forEach((item) => {
    console.log(`${item.imie} ${item.nazwisko} ${item.dataUrodzenia}`);
  });