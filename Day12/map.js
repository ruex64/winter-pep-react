// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }

const items=[{name:"Bike",price:100000},
    {name:"TV", price:"10000"},
  {name:"Phone", price:"40000"}];
const namee=(items)=>{
return  items.name  
}
 console.log(items.map(namee)) 
