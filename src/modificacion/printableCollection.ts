/**
 * Interface Collectable that define a collectable collection
 */
export interface Collectable<T> {
  /**
   * Function addItem() that will allow us to add an item to our collection 
   * @param {T} item Item we want to add to our collection
   */
  addItem(item: T): void;
  /**
   * Function getItem(item) that will allow us to get an item from our collection
   * @param {T} item Item we want to get from our collection
   * @return {T} Item we wanted from our collection returned
   */
  getItem(item: T): T;
  /**
   * Function removeItem(item) that allow us to delete a specified item from our collection
   * @param {T} item Item we want to delete from our collection
   */
  removeItem(item: T): void;
  /**
   * Function getNumberOfItems() that returns the number of items of our collection
   * @return {number} Number of items of our collection
   */
  getNumberOfItems(): number;
}

/**
 * Interface Printable that define a printable collection
 */
export interface Printable<T> {
  /**
   * Function print() that will allow us to get an string with all the elements of our
   * collection joined by a comma
   * @return {string} String with all of our items from our collection joined by a comma 
   */
  print(): string;
}

/**
 * Abstract class Printable collection that implements the interfaces collectable and printable
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  /**
   * Constructor of our class PrintableCollection
   * @param {T[]} collection Array with the items we want to add to our collection
   */
  constructor(protected collection: T[]){}

  /**
   * Function that allow us to add a item to our collection
   * @param {T} item Item we want to add to our collection
   */
  addItem(item: T): void {
    this.collection.push(item);
  }

  /**
   * Function that return us the item specified of our collection
   * @param {T} item Item we want to get returned
   * @return {T} Item returned
   */
  getItem(item: T): T {
    for (let i = 0; i < this.collection.length; i++) {
      if (item === this.collection[i]) {
        return this.collection[i];
      }
    }
  }

  /**
   * Function that allow us to delete a specified item from our collection
   * @param {T} item Item we want to delete from our collection 
   */
  removeItem(item: T): void {
    for (let i = 0; i < this.collection.length; i++) {
      if (item === this.collection[i]) {
         this.collection.splice(i, 1);
      }
    }
  }

  /**
   * Function that return the number of items of our collection
   * @return {number} Number of items of our collection
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  /**
   * Function that returns our complete collection
   * @return {T[]} Array of all the items of our collection
   */
  getItems(): T[] {
    return this.collection;
  }

  /**
   * Abstract method that subclasses will use to print
   */
  abstract print(): string;
}
