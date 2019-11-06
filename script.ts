//TALLEST MOUNTAIN
//declare an interface called Mountain
//that contains props: name, height
interface Mountain {
  name: string;
  height: number;
}

//declare array mountains which is an array of type Mountain
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

//define a function that called findNameOfTallestMountain
//takes one parameter, an array of Mountain objects
let tallestName: string = "";
function findNameOfTallestMountain(mountains: Mountain[]): string {
  let i: number = 1;
  let tallest: Mountain = mountains[0];
  //mountains.forEach(mountain => {}
  for (i; i < mountains.length; i++) {
    if (mountains[i].height > tallest.height) {
      tallest = mountains[i];
      tallestName = tallest.name;
    }
  }
  return tallestName;
}

//call the findNameOfTallestMountain function and pass in mountains array as arg
//should print "Everest"
findNameOfTallestMountain(mountains);
console.log(tallestName);

//PRODUCT
//declare an interface called Product
interface Product {
  name: string;
  price: number;
}

//fill the array with a few items of your choosing
let products: Product[] = [
  { name: "Red Bull", price: 4 },
  { name: "Coca-Cola", price: 2 },
  { name: "Water", price: 1 }
];

// Declare a function called calcAverageProductPrice.
// It takes one parameter, an arrayof Product objects.
// It returns a number, the average price of all the products provided as an argument
let totalAmt: number = 0;
let average: number = 0;
function calcAverageProductPrice(products: Product[]): number {
  for (const product of products) {
    totalAmt += product.price;
  }
  average = totalAmt / products.length;
  return average;
}

//Call calcAverageProductPrice, passing it your products array as an argument.
calcAverageProductPrice(products);
console.log(average);

//INVENTORY
//Declare an interface called InventoryItem that contains the following properties:
// product - Product (from above)
// quantity - number
interface InventoryItem {
  product: Product;
  quantity: number;
}

//Declare an array called inventory which is an array of type InventoryItem.
let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

let invenCost: number = 0;
let invenTotal: number = 0;
function calcInventoryValue(inventory: InventoryItem[]): number {
  for (const item of inventory) {
    invenCost = item.product.price * item.quantity;
    invenTotal += invenCost;
  }
  return invenTotal;
}

calcInventoryValue(inventory);
console.log(invenTotal);
