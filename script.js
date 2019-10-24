class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

function print(book) {
  for (const contact of book.contacts) {
    console.log(book);
  }
}
const book = new AddressBook();

book.add("Chris", "hdbfhd", "355336", "djfj");
book.add("Chris", "hdbfhd", "355336", "djfj");
book.add("Chris", "hdbfhd", "355336", "djfj");
book.add("Chris", "hdbfhd", "355336", "djfj");

console.log(book.contacts.length);
console.log(book.contacts[0].name);
console.log(book);
book.deleteAt(1);
