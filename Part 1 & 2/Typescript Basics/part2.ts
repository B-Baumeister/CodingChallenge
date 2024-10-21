////////////////Task1 - Functions & Typing///////////////////////

function calculateArea(Width: number, Height: number) {
  return console.log('area of rectangle: ', Width * Height);
}
let measure = { Width: 50, Height: 10 };
calculateArea(measure.Width, measure.Height);

////////////////Task2 - Interfaces and Object///////////////////////

interface User {
  name: string;
  age: number;
  email: string;
}

const Users: User[] = [
  { name: 'Anna Schmidt', age: 28, email: 'anna.schmidt@example.com' },
  { name: 'Max Müller', age: 34, email: 'max.mueller@example.com' },
  { name: 'Lisa Weber', age: 22, email: 'lisa.weber@example.com' }
];

// }
////////////////Task3 - Generics///////////////////////

function useArray(users: User[]) {
  console.log('Original Users', users);
  const reverseUsers: User[] = [...users].reverse();
  console.log('reverseUsers', reverseUsers);
}

useArray(Users);
