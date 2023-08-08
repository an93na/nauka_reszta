let mainCustomer = {
  name: "Jan",
  surname: "Jakiś",
  address: {
    city: "NY",
    zip: 888,
    street: "5th Avenue",
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
    newAddress.street === undefined
  ) {
    console.erorr("newAddress object nie jest kompletny");
    return;
  }
  //   jesteśmy pewni że newAddress jest ok
  customer.address = newAddress;
}

function changeStreet(customer, newAddress) {
  customer.address.street = newAddress.street;
}

mainCustomer.logAddress();
changeAddress(mainCustomer, {
    city: "Lipowe Pole",
    zip: 222,
    street: "Polna",
});
mainCustomer.logAddress();
