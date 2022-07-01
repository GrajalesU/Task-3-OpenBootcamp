export class Contact {
  name = ""
  lastName = ""
  email = ""
  isConnected = false

  constructor(name, lastName, email, isConnected) {
    this.name = name
    this.lastName = lastName
    this.email = email
    this.isConnected = isConnected
  }
}