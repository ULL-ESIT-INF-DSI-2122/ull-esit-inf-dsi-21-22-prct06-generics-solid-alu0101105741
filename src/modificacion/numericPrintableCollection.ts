import {PrintableCollection} from './printableCollection';

export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(items: number[]) {
    super(items);
  }

  print(): string {
    return this.collection.join(', ');
  }

  getItems(): number[] {
    return this.collection;
  }
}
