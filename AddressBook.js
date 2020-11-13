class AddressBook {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    toString() {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city
            + " State: " + this.state + " Zip: " + this.zip + " Phone: " + this.phone + " Email: " + this.email;
    }
}

let contact = new AddressBook("Prerna", "Raghuwanshi", "Directors Bunglow", "Bhopal", "MP", "462003", "9475976187", "prerna4@gmail.com");
console.log(contact.toString());