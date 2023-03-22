import Validator from '../Validator/Validator';

test('Валидация username', () => {
  const input = new Validator('ddd522ddd').validateUsername();

  expect(input).toEqual(true);
});
