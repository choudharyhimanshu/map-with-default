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

test('Map to return true for valid key', () => {
  const key = 'foo';
  const value = 'bar';

  const mapWithDefault = new MapWithDefault<string, string>([[key, value]], '');

  expect(mapWithDefault.has(key)).toBe(true);
});

test('Map to reflect size on insert, delete and clear', () => {
  const defaultValue: string = 'foobar';
  const mapWithDefault = new MapWithDefault<string, string>([], defaultValue);

  expect(mapWithDefault.size()).toBe(0);

  mapWithDefault.set('a', 'b');
  expect(mapWithDefault.size()).toBe(1);

  mapWithDefault.set('b', 'c');
  expect(mapWithDefault.size()).toBe(2);

  mapWithDefault.delete('a');
  expect(mapWithDefault.size()).toBe(1);

  mapWithDefault.clear();
  expect(mapWithDefault.size()).toBe(0);
});
