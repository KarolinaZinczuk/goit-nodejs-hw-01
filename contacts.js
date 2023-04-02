const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join("./db/contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
}

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const removedContact = contacts.splice(index, 1);
  await updateContacts(contacts);
  return removedContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};