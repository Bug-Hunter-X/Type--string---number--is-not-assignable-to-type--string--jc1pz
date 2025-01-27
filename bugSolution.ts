function greeter(person: string): string {
  return "Hello, " + person;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

let user = ["Jane Doe", 2];

if (isString(user[0])) {
  console.log(greeter(user[0]));
} else {
  console.log('Invalid user input');
}
//or
let user2 = "Jane Doe";
console.log(greeter(user2));