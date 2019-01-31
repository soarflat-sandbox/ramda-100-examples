import { prop, assoc } from 'ramda';

type User = {
  name: string;
  email: string;
  age: number;
  address: {
    zipcode: string;
  };
};

const user: User = {
  name: 'Bret',
  email: 'bred@april.biz',
  age: 22,
  address: {
    zipcode: '92998-3874'
  }
};

console.log(prop('name', user)); // => Bret
console.log(assoc<number, User, string>('age', 23, user));
// =>
// { name: 'Bret',
//   email: 'bred@april.biz',
//   age: 23,
//   address: { zipcode: '92998-3874' } }
console.log(assoc<number, string>('age', 23)(user));
// =>
// { name: 'Bret',
//   email: 'bred@april.biz',
//   age: 23,
//   address: { zipcode: '92998-3874' } }
