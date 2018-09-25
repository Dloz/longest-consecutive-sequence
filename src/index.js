module.exports = function longestConsecutiveLength(array) {
  if(array.length === 0) return 0;
  if(array.length === 1) return 1;
  
  var arr = [];
  var arr2 = [];
  array = array.sort((a,b) => (a-b));
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1] - 1) {
      arr.push(array[i]);
    }
    else if (array[i] === array[i + 1]) {
      continue;
    }
    else {
      if (arr.length >= arr2.length) {
          [arr,arr2] = [arr2,arr];
      }
      arr = [];
    }
  }
  return arr2.length + 1;

}
