const orders = {
  marta: {
    orderId: 1,
    items: [
      { product: 'Laptop', quantity: 3, price: 1200 },
      { product: 'Mouse', quantity: 2, price: 25 }
    ]
  },
  sarah: {
    orderId: 2,
    items: [
      { product: 'Keyboard', quantity: 1, price: 75 },
      { product: 'Monitor', quantity: 1, price: 300 }
    ]
  },
  sadie: {
    orderId: 3,
    items: [
      { product: 'Desk Chair', quantity: 1, price: 150 },
      { product: 'Desk Lamp', quantity: 2, price: 40 }
    ]
  }
};

// To run file in terminal, use: practice3.js 
console.log('Practice file #3 is running!')

/* 
Prompt: Write a function that takes in a person's name and returns the total cost of their order.

calculateCost('marta') ----> "$3650"
calculateCost('sarah') ----> "$375"
calculateCost('sadie') ----> "$230"
*/