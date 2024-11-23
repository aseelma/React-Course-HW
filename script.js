//task 2:
function calculater(arr) {
    const total = arr.reduce((sum, num) => sum + num, 0);
    const avg = total / arr.length; 
    return
    {
        total, avg
    }
       
}

const arr = [1, 2, 3, 4, 5];
const answer = calculater(arr);
console.log("The total= ", answer.total);
console.log("The average= ", answer.avg); 
/***********************************************************************/
//task 3:

function removeDuplicates(arr) {
    return [...new Set(arr)]; // set -> for unique values
}

const cities = ["Hebron", "Gaza", "Yafa", "Gaza", "AlQuds", "Gaza"];
const unique_cities = removeDuplicates(cities);
console.log(unique_cities);
