import {PrintableCollection} from './printableCollection';

export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(items: string[]) {
    super(items);
  }

  print(): string {
    return this.collection.join(', ');
  }

  getItems(): string[] {
    return this.collection;
  }
}
