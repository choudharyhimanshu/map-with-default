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
    return typeof value === 'undefined' ? this.defaultValue : value;
  }

  /**
   * @param key Key to set in the map
   * @param value Value to set for the key
   * @return void
   */
  public set(key: K, value: V): void {
    this.map = this.map.set(key, value);
  }

  /**
   * @param key Key to check in the map
   * @return Boolean if the key is present or not
   */
  public has(key: K): boolean {
    return this.map.has(key);
  }

  /**
   * @returns Number of keys present in the map
   */
  public size(): number {
    return this.map.size;
  }

  /**
   * @description Clears the map
   * @returns void
   */
  public clear(): void {
    this.map.clear();
  }

  /**
   * @param key Key to delete from the map
   * @return Boolean if the key was present or not
   */
  public delete(key: K): boolean {
    return this.map.delete(key);
  }
}
