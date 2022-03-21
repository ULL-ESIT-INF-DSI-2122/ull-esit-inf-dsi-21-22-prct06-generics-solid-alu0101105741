interface Collectable<T> {
  addItem(item: T);
  getItem(item: T): T;
  removeItem(item: T);
  getNumberOfItems(): number;
}

interface Printable<T> {
  print(): string;
}

export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  constructor(protected collection: T[]){}

  addItem(item: T) {
    this.collection.push(item);
  }

  getItem(item: T): T {
    for (let i = 0; i < this.collection.length; i++) {
      if (item === this.collection[i]) {
        return this.collection[i];
      }
    }
  }

  removeItem(item: T) {
    for (let i = 0; i < this.collection.length; i++) {
      if (item === this.collection[i]) {
         this.collection.splice(i, 1);
      }
    }
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract print(): string;
}
