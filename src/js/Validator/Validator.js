export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    return (
      /^[^\d\_\-][\w\-\_]+[^\d\_\-]$/.test(this.userName) &&
      !/\d\d\d+/.test(this.userName)
    );
  }
}
