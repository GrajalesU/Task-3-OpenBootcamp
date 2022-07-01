import "./App.css";
import ContactForm from "./components/contactForm";
import ContactList from "./components/ContactList";
import { useState } from "react";
import { Contact as ContactModel } from "./models/contact.class";

function App() {
  const DEFAULT_CONTACTS = [
    new ContactModel("Juan Camilo", "Posada", "juan@posada.com", false),
    new ContactModel("Dayana María", "Lopez", "Dayana@lopez.com", false),
    new ContactModel("Enrique", "Segoviano", "enrique@segoviano.com", true),
    new ContactModel("AA", "Yo", "juan@grajales.com", false),
  ];
  const [contacts, setContacts] = useState(DEFAULT_CONTACTS);

  const addContact = (contact) => {
    const currentContacts = [...contacts];
    currentContacts.push(contact);
    setContacts(currentContacts);
  };

  const deleteContact = (contact) => {
    const currentContacts = [...contacts];
    const index = currentContacts.indexOf(contact);
    currentContacts.splice(index, 1);
    setContacts(currentContacts);
  };

  const setOnline = (contact) => {
    const currentContacts = [...contacts];
    const index = currentContacts.indexOf(contact);
    currentContacts[index].isConnected = !currentContacts[index].isConnected;
    setContacts(currentContacts);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Contact List</h1>
        <ContactList
          contacts={contacts}
          set={setOnline}
          remove={deleteContact}
        />
        <ContactForm add={addContact} />
      </div>
    </div>
  );
}

export default App;
