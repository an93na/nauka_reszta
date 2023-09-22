let mainCustomer = {
  name: "Jan",
  surname: "Jakiś",
  address: {
    city: "NY",
    zip: 888,
    street: "5th Avenue",
    numbers: {
      main: 5,
      secondary: 1,
    },
  },
  logAddress: function () {
    console.log(this.address);
  },
};

function changeAddress(customer, newAddress) {
  if (newAddress === undefined) {
    console.error("Parametr newAddres jest wymagany");
    // przerwie działanie funkicji i nie przypisze undefined zabezpieczyliśmy się przed tym
    return;
  }
  if (
    newAddress.city === undefined ||
    newAddress.zip === undefined ||
    newAddress.street === undefined ||
    newAddress.numbers === undefined
  ) {
    console.erorr("newAddress object nie jest kompletny");
    return;
  }
  //   jesteśmy pewni że newAddress jest ok
  customer.address = newAddress;
}

function changeNumber(customer, newAddress) {
  customer.address.numbers = newAddress.numbers.main;
  customer.address.numbers = newAddress.numbers.secondary;
}

let newAdres1 = {
  city: "Lipowe Pole",
  zip: 222,
  street: "Polna",
  numbers: {
    main: 5,
  },
};

mainCustomer.logAddress();
changeAddress(mainCustomer, newAdres1);
mainCustomer.logAddress();
let newNumber = 22;
try {
  // wiemy, że coś może tu źle pójść (kod podejrany)
  changeNumber(mainCustomer, newNumber);
} catch (error) {
  // jeśli  tu trafimy to wypisujemy co jest nie tak.
  // i program nie kończy gwałtownie działania jak bez tego
  // (jeśli błąd to tu trafiamy)
  console.error(error);
  if (typeof newNumber === "number") {
    let correctedNumber = {
      numbers: {
        main: newNumber,
        secondary: undefined,
      },
    };
    console.log(`Updating address with corrected address`);
    console.log(correctedNumber);
    changeNumber(mainCustomer, correctedNumber);
  }
} finally {
  // (zawsze wykonuje się na koniec)
  mainCustomer.logAddress();
  console.log("Program konczy działanie");
}

let newAdresInvalid = {
  city: "Lipowe Pole",
  zip: 222,
  street: "Polna",
  numbers: {
    main: 100,
  },
};

// twarda funkcja wyrzuca błąd
function changeAddressThrow(customer, newAddress) {
  if (newAddress === undefined) {
    // wyrzuca błąd z naszym własnym tekstem
    throw new Error("newAddres jest wymagany i nie został dostarczony");
  }
  if (
    newAddress.city === undefined ||
    newAddress.zip === undefined ||
    newAddress.street === undefined ||
    newAddress.numbers === undefined
  ) {
    throw new Error("jeden z wymaganych parametrów nie został dostarczony");
  }
  //   jesteśmy pewni że newAddress jest ok
  customer.address = newAddress;
}

changeAddressThrow(mainCustomer, newAdresInvalid);
