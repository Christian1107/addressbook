class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts = [
      ...this.contacts,
      new Contact(name, email, phone, relation)
    ];
  }
  deleteAt(index) {
    index = Number(index);
    this.contacts = [
      ...this.contacts.slice(0, index),
      ...this.contacts.slice(index + 1)
    ];
  }
}

function print(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
}

const addressBook = new AddressBook();
addressBook.add("Mitch", "mitch@grandcircus.co", "248-248-2487", "me");
addressBook.add("Tyler", "tyler@email.com", "248-248-2488", "brother");
addressBook.add("John", "john@email.com", "248-248-2489", "friend");

// print(addressBook);
// console.log("********");
// addressBook.deleteAt(1); //delete Tyler
// print(addressBook);
// // Collapse;

function display() {
  document.querySelector("#contact_list").innerHTML = "";
  addressBook.contacts.forEach((contact, index) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("contact_box");
    newEntry.innerHTML = `
    <p>Name: ${contact.name}</p>
    <p>Email: ${contact.email}</p>
    <p>Phone: ${contact.phone}</p>
    <p>Relation: ${contact.relation}</p>
    <i class="fa fa-trash" data-index-numbers="${index}"
    aria-hidden= "true"></li>
    `;
    document.querySelector("#contact_list").appendChild(newEntry);
  });
}
display();

const form = document.querySelector("form");

form.addEventListener("submit", addContact);

function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}

document
  .querySelector("#contact_list")
  .addEventListener("click", deleteContact);

function deleteContact(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index-number");
    console.log(index);
    addressBook.deleteAt(index);
    display();
  }
}
