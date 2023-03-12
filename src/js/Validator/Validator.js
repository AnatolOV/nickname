export default class Validator {
  constructor(userName) {
    this.userName = userName;
    this.noLettersDashUnderscoreStart = /^[^\d_-]/;
    this.noLettersDashUnderscoreEnd = /[^\d_-]$/;
    this.exeptThreeNumbersInRow = !/\d{4,}/;
    this.onlyEnglishLetter = /[\w\-_]+/;
  }

  validateUsername() {
    return this.noLettersDashUnderscoreStart.test(this.userName);
    // ни как не могу понять почему один this.noLettersDashUnderscoreStart.test(this.userName) работает, а когда два условия, например,
    // return (this.noLettersDashUnderscoreStart && this.noLettersDashUnderscoreEnd).test(this.userName) - одно из условий перестает работать...
    // а остальные 2 вообще не работают..) Помогите, пожалуйста, разобраться что не так... также lint ругается, что строка return 
    // получается длиннее чем 130 символов, что нужно сделать в этом случае?

    // return (
    //   /^[^\d\_\-][\w\-\_]+[^\d\_\-]$/.test(this.userName) &&
    //   !/\d\d\d+/.test(this.userName)
    // );
  }
}
