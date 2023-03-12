import Validator from '../Validator/Validator';

test('Валидация username', () => {
  const input = new Validator('wdee').validateUsername();

  expect(input).toEqual(true);
});
