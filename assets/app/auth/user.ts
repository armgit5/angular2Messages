export class User {
  email: string;
  constructor(email: string, password: string, firstName?: string, lastName?: string) {
    this.email = email;
  }
}
