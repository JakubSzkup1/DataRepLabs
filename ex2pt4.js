//Array for ages
const ages = [25, 31, 42, 77];

//if else statement multiplies the number in the array by 2 
let partD = ages.map((item) => {
    if (item < 70) { //only if the age is under 70
        return item * 2;
    }
    else {
        return item;
    }

})
console.log(partD);