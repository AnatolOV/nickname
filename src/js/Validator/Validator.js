export default class Validator {
  constructor(userName) {
    this.userName = userName;
    this.noLettersDashUnderscoreStart = /^[^\d_-]/;
    this.noLettersDashUnderscoreEnd = /[^\d_-]$/;
    this.exeptThreeNumbersInRow = !/\d\d\d+/;
    this.onlyEnglishLetter = /[\w\-_]+/;
  }

  validateUsername() {
    // пробую делать в соответствии с комментарием, не работает(см.ниже)
    // пробую выполнять частями, тоже не работают, например return this.exeptThreeNumbersInRow.test(this.userName) - не работает, а если
    //  запускаю return !/\d\d\d+/.test(this.userName) - работает 

    return (
      this.noLettersDashUnderscoreStart.test(this.userName) &&
      this.onlyEnglishLetter.test(this.userName) &&
      this.noLettersDashUnderscoreEnd.test(this.userName) &&
      this.exeptThreeNumbersInRow.test(this.userName)
    );

    // return (
    //   /^[^\d\_\-][\w\-\_]+[^\d\_\-]$/.test(this.userName) &&
    //   !/\d\d\d+/.test(this.userName)
    // );
  }
}
