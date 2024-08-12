import { createUser } from "../services/CreateAccount/services";

class User {
  constructor(document, firstName, lastName, email, password) {
    this.document = document;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  async createUser() {
    const respuesta = await createUser(
      this.document,
      this.firstName,
      this.lastName,
      this.email,
      this.password
    );

    return respuesta;
  }
}

export default User;
