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
  // wiemy, że coś może tu źle pójść
  changeNumber(mainCustomer, newNumber);
} catch (error) {
  // jeśli  tu trafimy to wypisujemy co jest nie tak.
  // i program nie kończy gwałtownie działania jak bez tego
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
}
mainCustomer.logAddress();
console.log("Program konczy działanie");
