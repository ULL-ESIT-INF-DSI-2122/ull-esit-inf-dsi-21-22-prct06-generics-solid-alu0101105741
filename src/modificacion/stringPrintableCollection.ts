import {PrintableCollection} from './printableCollection';

/**
 * StringPrintableCollection class that allow us to create a collection of strings
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Constructor of our class StringPrintableCollection
   * @param {string[]} items Array with the items of our collection
   */
  constructor(items: string[]) {
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
