export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const exeptThreeNumbersInRow = !/\d{4,}/;
    const onlyEnglishLetter = /[\w\-\_]+/;
    const noLettersDashUnderscoreStart = /^[^\d\_\-]/;
    const noLettersDashUnderscoreEnd = /[^\d\_\-]$/;
    return (noLettersDashUnderscoreStart && onlyEnglishLetter && noLettersDashUnderscoreEnd && exeptThreeNumbersInRow);

    // return (
    //   /^[^\d\_\-][\w\-\_]+[^\d\_\-]$/.test(this.userName) &&
    //   !/\d\d\d+/.test(this.userName)
    // );
  }
}
