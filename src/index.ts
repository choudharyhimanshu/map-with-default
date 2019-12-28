export default class MapWithDefault<K, V> {
  private defaultValue: V;
  private map: Map<K, V>;

  constructor(items: Array<[K, V]> | null, defaultValue: V) {
    this.defaultValue = defaultValue;
    this.map = new Map(items);
  }

  /**
   * @param key Key to fetch value from the map
   * @return Value if key found in map else default value
   */
  public get(key: K): V {
    const value = this.map.get(key);
    return value ? value : this.defaultValue;
  }
}
