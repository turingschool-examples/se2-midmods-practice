const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Road", author: "Cormac McCarthy", year: 2006 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "The Midnight Library", author: "Matt Haig", year: 2020 },
  { title: "Klara and the Sun", author: "Kazuo Ishiguro", year: 2021 }
];

// To run file in terminal, use: practice1.js 
console.log('Practice file #1 is running!')

/* 
Prompt: Write a function that takes in a year and returns an array of book titles that were written in or after that year.

findBooks(1900) ----> 
[
  'The Great Gatsby',
  'To Kill a Mockingbird',
  'The Road',
  '1984',
  'The Catcher in the Rye',
  'The Midnight Library',
  'Klara and the Sun'
]

findBooks(2010) ----> 
[ 
  'The Midnight Library', 
  'Klara and the Sun' 
]

*/