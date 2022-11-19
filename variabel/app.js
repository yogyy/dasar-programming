const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  document.querySelector("body").style.backgroundImage = "none";
  document.querySelector("body").style.backgroundColor = "royalblue";
});

const companies = [
  { name: "Company One", category: "Finance", start: "1981", end: "2003" },
  { name: "Company Two", category: "Retail", start: "1992", end: "2003" },
  { name: "Company Three", category: "Retaol", start: "1999", end: "2003" },
  { name: "Company Four", category: "Auto", start: "1981", end: "2003" },
  { name: "Company Five", category: "Technology", start: "1981", end: "2003" },
  { name: "Company Six", category: "Finance", start: "1987", end: "2003" },
  { name: "Company Seven", category: "Auto", start: "1981", end: "2003" },
  { name: "Company Eight", category: "Technology", start: "2011", end: "2003" },
  { name: "Company Nine", category: "Retail", start: "1981", end: "2004" },
];

const ages = [12, 51, 21, 22, 24, 53, 41, 44, 65, 40, 6, 33, 7];
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 20) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age){
//     if(age >= 20){
//         return true
//     }
// })

const canDrink = ages.filter((age) => age >= 20);
console.log(canDrink);

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
  (company) => company.category >= "Auto"
);
console.log(retailCompanies);

const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);

// const ageSum = ages.reduce(function(total, age) {
//     return total + age
// }, 0)

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
