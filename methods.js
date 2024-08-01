const arr1=[1,2,3]
const arr2=[4,5,6]
let final=arr1.concat(arr2)
console.log(final)


let arr3=[1,[2,[3,[4]]]]
let arr4=arr3.flat()
console.log(arr4)


let arr5=[1,2,3,4,5,6]
let removed=arr5.splice(2,2,"a","b")
console.log(removed)



let arr6=[1,2,3,4,5]
let newarray=arr6.slice(1,4)
console.log(newarray)



let arr7=[1,2,3,4,5]
let new1=arr7.copyWithin(0,3,5)
console.log(new1)


let arr8=[1,2,3,4,2]
let index=arr8.indexOf(2)
console.log("2 is in ",index,"index")


let arr9=[1,2,3,4,2]
let index1=arr9.lastIndexOf(2)
console.log("2 is in ",index1,"index")



const array = [1, 2, 3, 4, 5];
const hasValue = array.includes(3); 
console.log(hasValue)




const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2).flat();
const splicedArray = mergedArray.toSpliced(2, 1, 'a');


const finalArray = splicedArray.slice(1, 5);
console.log(finalArray.includes('a')); // true
console.log(finalArray.indexOf(5)); // 3






















