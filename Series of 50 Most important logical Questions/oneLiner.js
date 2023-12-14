//You have a array of an object having some items in it,
//Filter the item based on any specific condition given on the object
//return a filtered data into a new format with two property only.

const Accessories = [
  { id: 1, item: "covers", price: 200, available: false },
  { id: 2, item: "headphones", price: 1200, available: true },
  { id: 3, item: "cables", price: 199, available: false },
  { id: 4, item: "speakers", price: 999, available: true },
  { id: 5, item: "mouse", price: 599, available: false },
  { id: 6, item: "keyboards", price: 1299, available: true },
];

const data = Accessories.filter((item) => item.available).map((e) => ({
  name: e.item,
  price: e.price,
}));
console.log("Data here..", data);

// let stock = [];
// for (let i = 0; i < Accessories.length; i++) {
//   if (Accessories[i].available) {
//     stock.push(Accessories[i]);
//   }
// }

// let AvailableItem = [];
// for (let i = 0; i < stock.length; i++) {
//   AvailableItem.push({
//     item: stock[i].item,
//     price: stock[i].price,
//   });
// }

// console.log(stock);
// console.log(AvailableItem);
// console.log(Accessories);
