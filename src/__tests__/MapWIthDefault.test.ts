import MapWithDefault from '../index';

test('Map to return value for valid key', () => {
  const key = 'foo';
  const value = 'bar';

  const mapWithDefault = new MapWithDefault<string, string>([[key, value]], '');

  expect(mapWithDefault.get(key)).toBe(value);
});

test('Map to return default value for invalid key', () => {
  const defaultValue: string = 'foobar';

  const mapWithDefault = new MapWithDefault<string, string>([], defaultValue);

  expect(mapWithDefault.get('blah')).toBe(defaultValue);
});
