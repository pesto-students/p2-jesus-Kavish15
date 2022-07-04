function hasDuplicate(arr) {
  const arr2 = Array.from(new Set(num)); 
  // arr2 set which stores the unique values and remove duplicate
  if (arr.length == arr2.length) {
    return false;
  } else {
    return true;
  }
}
const num = [1, 2, -1];
const result = hasDuplicate(num);
console.log(result);
