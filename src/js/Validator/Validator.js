export default class Validator {
  constructor(userName) {
    this.userName = userName;
    this.noLettersDashUnderscoreStart = /^[^\d_-]/;
    this.noLettersDashUnderscoreEnd = /[^\d_-]$/;
    this.threeNumbersInRow = /\d{4,}/;
    this.onlyEnglishLetter = /[\w\-_]+/;
  }

  validateUsername() {
    return (
      this.noLettersDashUnderscoreStart.test(this.userName)
      && this.onlyEnglishLetter.test(this.userName)
      && this.noLettersDashUnderscoreEnd.test(this.userName)
      && !this.threeNumbersInRow.test(this.userName)
    );
  }
}
