class Contact {
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

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "First Name should start with capital letter and have minimum 3 characters";
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Last Name should start with capital letter and have minimum 3 characters";
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9 ]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw "Address should have minimum 4 characters";
    }
    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('^[a-zA-Z ]{4,}$');
        if (cityRegex.test(city))
            this._city = city;
        else throw "City should have minimum 4 characters";
    }
    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('^[a-zA-Z ]{4,}$');
        if (stateRegex.test(state))
            this._state = state;
        else throw "State should have minimum 4 characters";
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw "ZIP must be of the format 999 999";
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        let phoneRegex = RegExp('^[0-9]{2} [0-9]{10}$');
        if (phoneRegex.test(phone))
            this._phone = phone;
        else throw "Phone should be of the format 91 9123456475";
    }
    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^[a-z0-9]+[_+-\\.]{0,1}[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,}(\\.[a-z]{2,}){0,1}$');
        if (emailRegex.test(email))
            this._email = email;
        else throw "Email is invalid";
    }

    toString() {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city
            + " State: " + this.state + " Zip: " + this.zip + " Phone: " + this.phone + " Email: " + this.email;
    }
}
// Find a contact by firstName
function findContactByName(firstName, addressBookArr) {
    let contact;
    addressBookArr.forEach(contactObj => {
        if (contactObj.firstName == firstName) {
            contact = contactObj;
        }
    });
    return contact;
}

// Update contact
function updateContact(attribute, value, contact) {
    try {
        switch (attribute) {
            case "First Name":
                contact.firstName = value;
                break;
            case "Last Name":
                contact.lastName = value;
                break;
            case "Address":
                contact.address = value;
                break;
            case "City":
                contact.city = value;
                break;
            case "State":
                contact.state = value;
                break;
            case "Zip":
                contact.zip = value;
                break;
            case "Phone":
                contact.phone = value;
                break;
            case "Email":
                contact.email = value;
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
        console.log("Unable to Update!");
    }
}

// Delete contact
function deleteContact(firstName, addressBookArr) {
    let contactToDelete = findContactByName(firstName, addressBookArr);
    return addressBookArr.filter(contact => contact != contactToDelete);
}

// Number of contacts in address book
function count(addressBookArr) {
    let ans = addressBookArr.reduce((count) => count += 1, 0);
    return ans;
}

// Add contact to address book
function addContact(newContact, addressBookArr) {
    if (addressBookArr.find(contact => contact.firstName == newContact.firstName)) {
        console.log("Contact exists");
    }
    else
        addressBookArr.push(newContact);
}

// Search contact in city/state
function searchContact(attribute, value, addressBookArr) {
    let contactArr;
    switch (attribute) {
        case "City":
            contactArr = addressBookArr.filter(contact => contact.city == value);
            break;
        case "State":
            contactArr = addressBookArr.filter(contact => contact.state == value);
            break;
    }
    return contactArr;
}

// View person by city/state
function viewContact(attribute, addressBook) {
    let contactMap = new Map();
    switch (attribute) {
        case "City":
            addressBook.forEach(contact => {
                if (!contactMap.get(contact.city)) {
                    contactMap.set(contact.city, [contact]);
                } else {
                    contactMap.get(contact.city).push(contact);
                }
            });
            break;
        case "State":
            addressBook.forEach(contact => {
                if (!contactMap.get(contact.state)) {
                    contactMap.set(contact.state, [contact]);
                } else {
                    contactMap.get(contact.state).push(contact);
                }
            });
            break;
    }
    return contactMap;
}

// Display AddressBook
function displayAddressBook(addressBookArr) {
    return addressBookArr.forEach(contact => console.log(contact.toString()));
}
// Create address book array
let addressBookArr = new Array();
try {
    addressBookArr.push(new Contact("Sonal", "Jain", "xyz apartments", "Bengaluru", "Karnataka", "444461", "91 8787865420", "srewd@yahoo.com"));
    addressBookArr.push(new Contact("Priyal", "Tyagi", "qwerty lane", "Indore", "Madhya Pradesh", "989861", "91 1111111111", "something@gmail.com"));
    addressBookArr.push(new Contact("Sid", "Kapoor", "ABCDE apartments", "Bengaluru", "Karnataka", "440461", "91 2323265420", "sidkaps@yahoo.com"));
} catch (e) {
    console.error(e);
}

// Find Contact and edit it
let contactToEdit = findContactByName("Sonal", addressBookArr);
updateContact("Phone", "91 9434010859", contactToEdit);
console.log("EDIT CONTACT");
console.log(contactToEdit.toString());
console.log("-----------------");

// Delete contact
addressBookArr = deleteContact("Priyal", addressBookArr);
console.log("DELETE CONTACT");
displayAddressBook(addressBookArr);
console.log("---------------------");

// Count entries
let countEntries = count(addressBookArr);
console.log("COUNT ENTRIES");
console.log(countEntries);
console.log("------------------");

// Add contact
let contactToAdd = new Contact("Priya", "Tyagi", "qwerty lane", "Indore", "Madhya Pradesh", "989861", "91 1111111111", "something@gmail.com");
addContact(contactToAdd, addressBookArr);
console.log("ADDING CONTACT");
displayAddressBook(addressBookArr);
console.log("----------------");

// Add duplicate contact
console.log("ADDING DUPLICATE CONTACT")
addContact(contactToAdd, addressBookArr);
console.log("----------------");

//Search contact
let contactInCity = searchContact("City", "Bengaluru", addressBookArr);
console.log("SEARCH BY CITY/ STATE")
displayAddressBook(contactInCity);
console.log("--------------");

// View Contact
let contactMap = viewContact("State",addressBookArr);
console.log("VIEW CONTACT BY CITY/ STATE");
//console.log(contactMap);
displayAddressBook(contactMap);
console.log("-------------");

