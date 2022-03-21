import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../src/modificacion/numericPrintableCollection';
import {StringPrintableCollection} from '../src/modificacion/stringPrintableCollection';

describe('Test block on modification (Hexadecimal)', () => {
const numericCollection = new NumericPrintableCollection([1, 2, 3, 4]);
const stringCollection = new StringPrintableCollection(['Hola', 'me', 'llamo', 'Eric']);

  it('addItem() method', () => {
    numericCollection.addItem(5);
    stringCollection.addItem('Fumero');
    expect(numericCollection.getItem(5)).to.be.equal(5);
    expect(stringCollection.getItem('Fumero')).to.be.equal('Fumero');
  });

  it('getItem() method', () => {
    expect(numericCollection.getItem(3)).to.be.equal(3);
    expect(stringCollection.getItem('me')).to.be.equal('me');
  });

  it('removeItem() method', () => {
    numericCollection.removeItem(5);
    stringCollection.removeItem('Fumero');
    expect(numericCollection.getItems()).to.eql([1, 2, 3, 4]);
    expect(stringCollection.getItems()).to.eql(['Hola', 'me', 'llamo', 'Eric']);
  });

  it('getNumberOfItems() method', () => {
    expect(numericCollection.getNumberOfItems()).to.be.equal(4);
    expect(numericCollection.getNumberOfItems()).to.be.equal(4);
  });

  it('print() method', () => {
    expect(numericCollection.print()).to.be.equal('1, 2, 3, 4');
    expect(stringCollection.print()).to.be.equal('Hola, me, llamo, Eric');
  });
});