// Primitives: numbers, strings, booleans
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = "Miguel";

let isInstructor: boolean;
isInstructor = true;

// More complex
let hobbies: string[];
hobbies = ["soccer", "basketball"];

// Type Alias
type Person = {
  name: string;
  age: number;
};

// we are setting type of object. and what we accept
let person: Person;
person = {
  name: "Miguel",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[]; // we are accepting array of objects

// Type inference
// Union Type
let course: string | number = "React - The Complete Guide";

course = 12341;

// Function & Types
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
