const number = [4,7,9,12,5,8,1,43];
const number_asc = number.sort(function(a,b){return a-b});

console.log(number_asc);
const number_dsc = number.sort(function(a,b){return b-a});
console.log(number_dsc);