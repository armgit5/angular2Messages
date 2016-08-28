export class User {
  email: string;
  constructor(public email: string, public password: string, public firstName?: string, public lastName?: string) {
    this.email = email;
  }
}
