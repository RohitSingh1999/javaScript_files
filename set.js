const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


console.log(fruits.get("apples"));
console.log(typeof fruits);

const followers = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  const singh = followers.set("apples", 200);
  
  console.log(singh);