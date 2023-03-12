import Validator from '../Validator/Validator';

test('Валидация username', () => {
  const input = new Validator('w1333dee').validateUsername();

  expect(input).toEqual(true);
});
