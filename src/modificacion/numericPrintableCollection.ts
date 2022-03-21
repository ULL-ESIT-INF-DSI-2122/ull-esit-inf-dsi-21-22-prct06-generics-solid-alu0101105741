import {PrintableCollection} from './printableCollection';

/**
 * NumericPrintableCollection class that allow us to create a collection of numbers
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Constructor of our class NumericPrintableCollection
   * @param {number[]} items Array with the items of our collection
   */
  constructor(items: number[]) {
    super(items);
  }

  /**
   * Print method that returns a string with out items joined by a comma
   * @return {string} String with all the items joined by a comma
   */
  print(): string {
    return this.collection.join(', ');
  }
}
