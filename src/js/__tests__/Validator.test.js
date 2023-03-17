import Validator from '../Validator/Validator';

test('Валидация username', () => {
  const input = new Validator('eeerr').validateUsername();

  expect(input).toEqual(true);
});
