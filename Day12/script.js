//forEach
 let numbers = [1,2,3,4];
 numbers.forEach((item,index,array)=>{
  numbers[index] = item*2;
 })
 console.log(numbers)

 //filter -> return array

 let prices=[30,40,555,130]
 let filtered_Prices = prices.filter((price)=>{
  return  price>100;
 })
 console.log(filtered_Prices);



 const nums=[20,34,55,67,22];
 let evenNumber = nums.filter((num)=>{
  if(num%2==0 || num==0) return num;
 })
 console.log(evenNumber)

 //map
 const fruits = ['apple','mango','litchi'];
 const upperCase = fruits.map((fruit)=>fruit.toUpperCase())
 console.log(upperCase)

 //array of objects
 const items = [
  {name:"Bikes", price:100000},
  {name:"TV", price:10000},
  {name:"Phones", price:20000},
 ]
console.log(items)
const result = items.forEach((item)=>{
  console.log(item.name)
})

const temp = items.map((item)=>{
  return item.name
})
console.log(temp)


const raw_prices = [22.4555,77.899,34.666]
const temp1 = raw_prices.map((item)=>{
  return `Rs ${item.toFixed(2)}`
})
console.log(temp1)

//find
const discountedItem = items.find((item)=>item.price<100000)
if(discountedItem){
console.log(discountedItem.name)
}

//every
const numbers1 = [10,20,30,40]
const allAbove10 = numbers1.every(num=>num>10)
console.log(allAbove10)

//sort
const ages = [20,10,30,40]
ages.sort()
console.log(ages)