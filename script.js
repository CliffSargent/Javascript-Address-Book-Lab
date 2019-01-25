"use strict";

class Contact {
    constructor(name, email, relation, phone) {
        this.name = name;
        this.email = email;
        this.relation = relation;
        this.phone = phone;
    }
}

//only need three methods to be finished off, to add, delete or print off contacts. 

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
        
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++){
            console.log(this.contacts[i]);
        }
    }
}

const book = new AddressBook();
// console.log(book);
book.add(new Contact("Syntax", "hendrix.com", "666", "thing"));
book.add(new Contact("Cliff", "thing.com", "888", "A guy"));
book.add(new Contact("Woodstock", "concerts@gmail.com", "424", "my bird"));

while (true) {
  const choice = prompt("Would you like to Add, Print, Delete or Quit?");
if (choice === "add") {
    const name = prompt("Enter Name: ", "test-name");
    const email = prompt("Enter Email: ", "test-email"); 
    const phone = prompt("Enter Phone: ", "test-phone"); 
    const relation = prompt("Enter Relation: ", "test-relation");
    book.add(new Contact(name, email, phone, relation)); 
   } else if (choice === "print"){
     console.clear();
     book.print();
   } else if (choice === "delete"){
     const index = prompt("What index?");  
     book.deleteAt();
   } else if (choice === "quit") {
     console.log("seeya later nerd"); 
    break;
  } else {
      console.log("alright goodbye");
      break;
  }
}